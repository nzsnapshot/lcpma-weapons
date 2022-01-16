import { World, Player as PlyObj, Prop } from "@nativewrappers/client"
import { WEAPON_LIST } from "../shared/utils";

const Delay = (ms: number) => new Promise(res => setTimeout(res, ms));

let guns: Map<number, Prop> = new Map();

AddStateBagChangeHandler("gunModel", null, async (bagName: string, key: string, value: number, reserved: number, replicated: boolean) => {
	const plySrc: number = Number(bagName.replace("player:", ''))
	if (value == 0) {
		console.log("Cleanup player weapon")
		handleDeleteForServerId(plySrc);
		return;
	}
	const weaponInfo = WEAPON_LIST.get(value)
	if(!weaponInfo) return;
	const ply = PlyObj.fromServerId(plySrc);
    
	// For a few frames the player will exist before their actual ped
	// this gets around that by waiting for their ped handle to exist
	while(GetPlayerPed(GetPlayerFromServerId(plySrc)) == 0) {
		await Delay(0);
	}
	const ped = ply.Ped;
	const weaponObj = await World.createProp(weaponInfo.model, ped.Position, true, true, false);
	if (!weaponObj) return;
	weaponObj.attachToBone(
		ped.Bones.getBone(weaponInfo.bone),
		weaponInfo.offset,
		weaponInfo.rotation,
		false,
		true,
		false,
		2
	);
	guns.set(plySrc, weaponObj);
})

onNet("onPlayerDropped", (serverId: number) => {
	// When the player is dropped we need to remove their weapons
    console.log(`Cleanup ${serverId} weapon they went out of scope`)
	handleDeleteForServerId(serverId);
})

const handleDeleteForServerId = (serverId: number) => {
	const gun = guns.get(serverId);
	if (gun) {
		gun.delete();
		guns.delete(serverId);
	}
}