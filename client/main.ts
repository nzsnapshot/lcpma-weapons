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
	const ped = PlayerPedId();
	const currWeapon = GetSelectedPedWeapon(ped);

	for (const [hash, weaponData] of WEAPON_LIST) {
		const hasWeapon = HasPedGotWeapon(ped, hash, false);
		const weaponEquipped = currWeapon === hash;
		let weaponHash = (weaponEquipped || !hasWeapon) ? 0 : hash

        // Set the current weapon if there is not one currently set
        switch (weaponData.category) {
            case WeaponCategory.Melee:
                if (weaponHash == 0) {
                    if (currentWeapons.melee == hash) {
                        currentWeapons.melee = weaponHash
                    }
                    continue;
                }
                currentWeapons.melee = weaponHash;
                break;
            case WeaponCategory.HandGuns: 
                if (weaponHash == 0) {
                    if (currentWeapons.handgun == hash) {
                        currentWeapons.handgun = weaponHash
                    }
                    continue;
                }
                currentWeapons.handgun = weaponHash;

                break;
            default:
                if (weaponHash == 0) {
                    if (currentWeapons.heavy == hash) {
                        currentWeapons.heavy = weaponHash
                    }
                    continue;
                }
                currentWeapons.heavy = weaponHash;
                break;
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
