import { WEAPON_LIST } from "../shared/utils";
import { WEAPON_BAG_TYPES } from "../typings/weapons";

for (const stateBagName of WEAPON_BAG_TYPES) {
	AddStateBagChangeHandler(stateBagName, null, async (bagName: string, _key: string, value: number, _reserved: number, _replicated: boolean) => {
		const plySrc: number = Number(bagName.replace("player:", ''))
		if (value == 0) {
			return;
		}

		const weaponInfo = WEAPON_LIST.get(value)
		if (!weaponInfo) {
			console.log(`${plySrc} managed to have some invalid weapon synced!`)
		}
	})
}