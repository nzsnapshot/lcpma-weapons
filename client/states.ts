import { World } from "@nativewrappers/client/lib/World"
import { Player } from "@nativewrappers/client/lib/models/Player"
import { Prop } from "@nativewrappers/client/lib/models/Prop"

import { WEAPON_LIST } from "../shared/utils";
import { WeaponTypes, WEAPON_BAG_TYPES } from "../typings/weapons";
import { Delay } from "./utils";

export const weapons: Map<number, WeaponTypes> = new Map();

on('onClientResourceStart', (resource: string) => {
	if (resource !== GetCurrentResourceName()) return;

	GetGamePool("CObject").forEach((obj: number) => {
		// cleanup the weapon objects on resource start
		if (Entity(obj).state.isClientWeapon) {
			SetEntityAsMissionEntity(obj, true, true)
			DeleteEntity(obj)
		}
	});

	LocalPlayer.state.set('weapons:melee', 0, true)
	LocalPlayer.state.set('weapons:handGuns', 0, true)
	LocalPlayer.state.set('weapons:heavy', 0, true);
})

const handleMapSet = (plySrc: number, prop: Prop, weaponType: string)  => {
	let weaponData = weapons.get(plySrc);
	weaponData = weaponData ? weaponData : {
		melee: undefined,
		handgun: undefined,
		heavy: undefined
	}

	const { melee, handgun, heavy } = weaponData;

	if (weaponType === "weapons:melee") {
		melee?.delete();
		weaponData.melee = prop;
	} else if (weaponType === "weapons:handGuns") {
		handgun?.delete();
		weaponData.handgun = prop;
	} else if (weaponType === "weapons:heavy") {
		heavy?.delete();
		weaponData.heavy = prop;
	}
	weapons.set(plySrc, weaponData);

}

const serverId = GetPlayerServerId(PlayerId());

for (const stateBagName of WEAPON_BAG_TYPES) {
	AddStateBagChangeHandler(stateBagName, null, async (bagName: string, _key: string, value: number, _reserved: number, replicated: boolean) => {
		const plySrc: number = Number(bagName.replace("player:", ''))
		// We'll get this back as replicated, just discard it.
		if (replicated && plySrc === serverId) return;
		if (value == 0) {
			handleDeleteForServerId(plySrc, stateBagName);
			return;
		}

		const weaponInfo = WEAPON_LIST.get(value)
		if(!weaponInfo) return console.log("no valid weapon");
		const ply = Player.fromServerId(plySrc);
		
		// For a few frames the player will exist before their actual ped
		// this gets around that by waiting for their ped handle to exist
		while(ply.Ped.Handle == 0) {
			await Delay(0);
		}
	
		const ped = ply.Ped;
		const weaponObj = await World.createProp(weaponInfo.model, ped.Position, true, true, false);
		if (!weaponObj) return;
		weaponObj.IsCollisionEnabled = false
		Entity(weaponObj.Handle).state.set('isClientWeapon', true, false);
		handleMapSet(plySrc, weaponObj, stateBagName);
		weaponObj.attachToBone(
			ped.Bones.getBone(weaponInfo.bone),
			weaponInfo.offset,
			weaponInfo.rotation,
			false,
			true,
			false,
			2
		);
	})
}


onNet("onPlayerDropped", (serverId: number) => {
	// When the player is dropped we need to remove their weapons
	handleDeleteAllForServerId(serverId);
})

const handleDeleteForServerId = (serverId: number, weaponType: string) => {
	const weaponData = weapons.get(serverId);
	if (weaponData) {
		const {handgun, melee, heavy} = weaponData;
		
		if (weaponType === "weapons:melee") {
			melee?.delete();
			weaponData.melee = null;
		} else if (weaponType === "weapons:handGuns") {
			handgun?.delete();
			weaponData.handgun = null;
		} else if (weaponType === "weapons:heavy") {
			heavy?.delete();
			weaponData.heavy = null;
		}
	}
}

const handleDeleteAllForServerId = (serverId: number) => {
	const gun = weapons.get(serverId);
	if (gun) {
		const {handgun, melee, heavy} = gun;

		handgun?.delete()
		melee?.delete()
		heavy?.delete()
		
		weapons.delete(serverId);
	}
}
