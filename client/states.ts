import { World, Player as PlyObj, Prop } from "@nativewrappers/client"
import { WEAPON_LIST } from "../shared/utils";
import { WeaponTypes, WEAPON_BAG_TYPES } from "../typings/weapons";
import { Delay } from "./utils";


export const weapons: Map<number, WeaponTypes> = new Map();

// on('onClientResourceStart', (resource: string) => {
// 	if (resource !== GetCurrentResourceName()) return;

// 	const melee = LocalPlayer.state['weapons:melee']
// 	const handguns = LocalPlayer.state['weapons:handGuns']
// 	const heavy = LocalPlayer.state['weapons:heavy']

// 	GetGamePool("CObject").forEach((obj: number) => {
// 	});

// 	// LocalPlayer.state.set('weapons:melee', 0, true)
// 	// LocalPlayer.state.set('weapons:handGuns', 0, true)
// 	// LocalPlayer.state.set('weapons:heavy', 0, true);

// })

on("onClientResourceStop", (resource: string) => {
	if (resource !== GetCurrentResourceName()) return;
	for (const [source] of weapons) {
		handleDeleteForServerId(source);
	}
})

const handleMapSet = (plySrc: number, prop: Prop, weaponType: string)  => {
	let weaponData = weapons.get(plySrc);
	if (weaponData) {
		if (weaponType === "weapons:melee") {
			if (weaponData.melee) {
				weaponData.melee.delete();
			}
			weaponData.melee = prop;
		} else if (weaponType === "weapons:handGuns") {
			if (weaponData.handgun) {
				weaponData.handgun.delete();
			}
			weaponData.handgun = prop;
		} else if (weaponType === "weapons:heavy") {
			if (weaponData.heavy) {
				weaponData.heavy.delete();
			}
			weaponData.heavy = prop;
		}
	} else {
		let weaponData: WeaponTypes = {
			melee: undefined,
			handgun: undefined,
			heavy: undefined
		}
		if (weaponType === "weapons:melee") {
			weaponData.melee = prop;
		} else if (weaponType === "weapons:handGuns") {
			weaponData.handgun = prop;
		} else if (weaponType === "weapons:heavy") {
			weaponData.heavy = prop;
		}
		weapons.set(plySrc, weaponData);
	}
}

const serverId = GetPlayerServerId(PlayerId());

for (const stateBagName of WEAPON_BAG_TYPES) {
	AddStateBagChangeHandler(stateBagName, null, async (bagName: string, _key: string, value: number, _reserved: number, replicated: boolean) => {
		const plySrc: number = Number(bagName.replace("player:", ''))
		// We'll get this back as replicated, just discard it.
		if (replicated && plySrc === serverId) return;
		if (value == 0) {
			handleDeleteForServerId(plySrc);
			return;
		}

		const weaponInfo = WEAPON_LIST.get(value)
		if(!weaponInfo) return console.log("no valid weapon");
		const ply = PlyObj.fromServerId(plySrc);
		
		// For a few frames the player will exist before their actual ped
		// this gets around that by waiting for their ped handle to exist
		while(ply.Ped.Handle == 0) {
			await Delay(0);
		}
	
		const ped = ply.Ped;
		const weaponObj = await World.createProp(weaponInfo.model, ped.Position, true, true, false);
		if (!weaponObj) return;
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
	handleDeleteForServerId(serverId);
})

const handleDeleteForServerId = (serverId: number) => {
	const gun = weapons.get(serverId);
	if (gun) {
		const {handgun, melee, heavy} = gun;
		if (handgun) {
			handgun.delete()
		}
		if (melee) {
			melee.delete()
		}
		if (heavy) {
			heavy.delete()
		}
		weapons.delete(serverId);
	}
}