import { Game } from "@nativewrappers/client";
import { WeaponCategory, WEAPON_LIST } from "../shared/utils";
import { CurrentWeapons } from "../typings/weapons";
import { Delay } from "./utils"
import './states.ts'


let currentWeapons: CurrentWeapons = {
	melee: 0,
	handgun: 0,
	heavy: 0
}

setTick(async () => {
	// We don't use internal weapon collections in fivem-js/nativewrappers because of them being wildly inconsistent
	const ped = Game.PlayerPed;
	const currWeapon = GetSelectedPedWeapon(ped.Handle);


	for (const [hash, weaponData] of WEAPON_LIST) {
		if (!HasPedGotWeapon(ped.Handle, hash, false)) continue;

		// TODO: Unduplicate this later
		if (currWeapon === hash) {
			switch (weaponData.category) {
				case WeaponCategory.Melee:
					if (hash  === currWeapon) {
						currentWeapons.melee = 0;
					}
					break;
				case WeaponCategory.HandGuns: 
					if (hash === currWeapon) {
						currentWeapons.handgun = 0;
					}
					break;
				default:
					if (hash == currWeapon) {
						currentWeapons.heavy = 0;
					}
					break;
			}
		} else {
			// Set the current weapon if there is not one currently set
			switch (weaponData.category) {
				case WeaponCategory.Melee:
					if (currentWeapons.melee === 0) {
						currentWeapons.melee = hash;
					}
					break;
				case WeaponCategory.HandGuns: 
					if (currentWeapons.handgun === 0) {
						currentWeapons.handgun = hash;
					}
					break;
				default:
					if (currentWeapons.heavy === 0) {
						currentWeapons.heavy = hash;
					}
					break;
			}
		}
	}

	if (LocalPlayer.state['weapons:melee'] !== currentWeapons.melee ) {
		LocalPlayer.state.set('weapons:melee', currentWeapons.melee, true)
	}

	if (LocalPlayer.state['weapons:handGuns'] !== currentWeapons.handgun) {
		LocalPlayer.state.set('weapons:handGuns', currentWeapons.handgun, true)
	}

	if (LocalPlayer.state['weapons:heavy'] !== currentWeapons.heavy) {
		LocalPlayer.state.set('weapons:heavy', currentWeapons.heavy , true)
	}

	await Delay(250);
})