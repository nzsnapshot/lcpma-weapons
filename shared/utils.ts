
import { Model, Vector3 } from "@nativewrappers/client"

export const DISABLED_WEAPONS: string[] = JSON.parse(LoadResourceFile(GetCurrentResourceName(), "disabledweapons.json"))


export enum WeaponCategory {
	Melee,
	HandGuns,
	SMG,
	Assault, 
	Shotgun,
	Sniper,
	Rifle,
	Police,
	Heavy,
	Throw,
	Other
}

interface WeaponInformation {
	model: Model,
	bone: number,
	offset: Vector3,
	rotation: Vector3,
	category: WeaponCategory
}

export const WEAPON_LIST: Map<number, WeaponInformation> = new Map()


WEAPON_LIST.set(GetHashKey("WEAPON_MINIGUN"), {
	model: new Model("w_mg_minigun"),
	bone: 24818,
	offset: new Vector3(0.1, -0.15, 0.0),
	rotation: new Vector3(0.0, 0.0, 0.0),
	category: WeaponCategory.Heavy
})

WEAPON_LIST.set(GetHashKey("WEAPON_RAILGUN"), {
	model: new Model("w_ar_railgun"),
	bone: 24818,
	offset: new Vector3(0.1, -0.15, 0.0),
	rotation: new Vector3(0.0, 0.0, 0.0),
	category: WeaponCategory.Heavy
})

WEAPON_LIST.set(GetHashKey("WEAPON_HOMINGLAUNCHER"), {
	model: new Model("w_lr_homing"),
	bone: 24818,
	offset: new Vector3(0.1, -0.15, 0.0),
	rotation: new Vector3(0.0, 0.0, 0.0),
	category: WeaponCategory.Heavy
})

WEAPON_LIST.set(GetHashKey("WEAPON_BULLPUPRIFLE"), {
	model: new Model("w_ar_bullpuprifle"),
	bone: 24818,
	offset: new Vector3(0.05, -0.17, -0.02),
	rotation: new Vector3(0.0, 155.0, 0.0),
	category: WeaponCategory.Assault
})


WEAPON_LIST.set(GetHashKey("WEAPON_SNIPERRIFLE"), {
	model: new Model("w_sr_sniperrifle"),
	bone: 24818,
	offset: new Vector3(0.1, -0.15, 0.0),
	rotation: new Vector3(0.0, 0.0, 0.0),
	category: WeaponCategory.Sniper
})


WEAPON_LIST.set(GetHashKey("WEAPON_SMG"), {
	model: new Model("w_sb_smg"),
	bone: 24818,
	offset: new Vector3(0.0, -0.15, 0.0),
	rotation: new Vector3(0.0, 155.0, 0.0),
	category: WeaponCategory.SMG
})

WEAPON_LIST.set(GetHashKey("WEAPON_HUNTINGRIFLE"), {
	model: new Model("w_sr_huntingrifle"),
	bone: 24818,
	offset: new Vector3(-0.25, -0.17, -0.1),
	rotation: new Vector3(180.0, 0.0, 0.0),
	category: WeaponCategory.Rifle
})

WEAPON_LIST.set(GetHashKey("WEAPON_GRENADELAUNCHER"), {
	model: new Model("w_lr_grenadelauncher"),
	bone: 24818,
	offset: new Vector3(0.1, -0.15, 0.0),
	rotation: new Vector3(0.0, 0.0, 0.0),
	category: WeaponCategory.Heavy
})

WEAPON_LIST.set(GetHashKey("WEAPON_STUNGUN"), {
	model: new Model("w_pi_stungun"),
	bone: 51826,
	offset: new Vector3(-0.055, 0.1, 0.05),
	rotation: new Vector3(-135.0, 0.15, 0.0),
	category: WeaponCategory.HandGuns
})


WEAPON_LIST.set(GetHashKey("WEAPON_COMBATMG"), {
	model: new Model("w_mg_combatmg"),
	bone: 24818,
	offset: new Vector3(0.1, -0.15, 0.0),
	rotation: new Vector3(0.0, 0.0, 0.0),
	category: WeaponCategory.SMG
})

WEAPON_LIST.set(GetHashKey("WEAPON_ASSAULTSMG"), {
	model: new Model("w_sb_smg"),
	bone: 24818,
	offset: new Vector3(0.1, -0.15, 0.0),
	rotation: new Vector3(0.0, 0.0, 0.0),
	category: WeaponCategory.SMG
})


WEAPON_LIST.set(GetHashKey("WEAPON_MARKSMANRIFLE"), {
	model: new Model("w_sr_marksmanrifle"),
	bone: 24818,
	offset: new Vector3(0.0, -0.17, -0.02),
	rotation: new Vector3(0.0, 155.0, 0.0),
	category: WeaponCategory.Rifle
})

WEAPON_LIST.set(GetHashKey("WEAPON_RPG"), {
	model: new Model("w_lr_rpg"),
	bone: 24818,
	offset: new Vector3(0.1, -0.15, 0.0),
	rotation: new Vector3(0.0, 0.0, 0.0),
	category: WeaponCategory.Heavy
})

WEAPON_LIST.set(GetHashKey("WEAPON_MARKSMANRIFLE_MK2"), {
	model: new Model("w_sr_marksmanrifle"),
	bone: 24818,
	offset: new Vector3(0.05, -0.17, -0.02),
	rotation: new Vector3(0.0, 155.0, 0.0),
	category: WeaponCategory.Police
})

WEAPON_LIST.set(GetHashKey("WEAPON_FIREWORK"), {
	model: new Model("w_lr_firework"),
	bone: 24818,
	offset: new Vector3(0.1, -0.15, 0.0),
	rotation: new Vector3(0.0, 0.0, 0.0),
	category: WeaponCategory.Heavy
})

WEAPON_LIST.set(GetHashKey("WEAPON_ADVANCEDRIFLE"), {
	model: new Model("w_ar_advancedrifle"),
	bone: 24818,
	offset: new Vector3(0.05, -0.17, -0.02),
	rotation: new Vector3(0.0, 155.0, 0.0),
	category: WeaponCategory.Police
})

WEAPON_LIST.set(GetHashKey("WEAPON_MG"), {
	model: new Model("w_mg_mg"),
	bone: 24818,
	offset: new Vector3(0.1, -0.15, 0.0),
	rotation: new Vector3(0.0, 0.0, 0.0),
	category: WeaponCategory.SMG
})

WEAPON_LIST.set(GetHashKey("WEAPON_ASSAULTSHOTGUN"), {
	model: new Model("w_sg_assaultshotgun"),
	bone: 24818,
	offset: new Vector3(0.1, -0.15, 0.0),
	rotation: new Vector3(0.0, 0.0, 0.0),
	category: WeaponCategory.Shotgun
})

WEAPON_LIST.set(GetHashKey("WEAPON_SPECIALCARBINE"), {
	model: new Model("w_ar_specialcarbine"),
	bone: 24818,
	offset: new Vector3(0.05, -0.17, -0.02),
	rotation: new Vector3(0.0, 155.0, 0.0),
	category: WeaponCategory.Police
})

WEAPON_LIST.set(GetHashKey("WEAPON_MUSKET"), {
	model: new Model("w_ar_musket"),
	bone: 24818,
	offset: new Vector3(-0.25, -0.17, -0.1),
	rotation: new Vector3(180.0, 0.0, 0.0),
	category: WeaponCategory.Shotgun
})

WEAPON_LIST.set(GetHashKey("WEAPON_HEAVYSNIPER"), {
	model: new Model("w_sr_heavysniper"),
	bone: 24818,
	offset: new Vector3(0.1, -0.15, 0.0),
	rotation: new Vector3(0.0, 135.0, 0.0),
	category: WeaponCategory.Sniper
})

WEAPON_LIST.set(GetHashKey("WEAPON_CARBINERIFLE"), {
	model: new Model("w_ar_carbinerifle"),
	bone: 24818,
	offset: new Vector3(0.05, -0.17, -0.02),
	rotation: new Vector3(0.0, 155.0, 0.0),
	category: WeaponCategory.Police
})

WEAPON_LIST.set(GetHashKey("WEAPON_BULLPUPSHOTGUN"), {
	model: new Model("w_sg_bullpupshotgun"),
	bone: 24818,
	offset: new Vector3(0.1, -0.15, 0.0),
	rotation: new Vector3(0.0, 135.0, 0.0),
	category: WeaponCategory.Shotgun
})

WEAPON_LIST.set(GetHashKey("WEAPON_ASSAULTRIFLE"), {
	model: new Model("w_ar_assaultrifle"),
	bone: 24818,
	offset: new Vector3(0.05, -0.17, -0.02),
	rotation: new Vector3(0.0, 155.0, 0.0),
	category: WeaponCategory.Assault
})

WEAPON_LIST.set(GetHashKey("WEAPON_PUMPSHOTGUN_MK2"), {
	model: new Model("w_sg_pumpshotgunmk2"),
	bone: 24818,
	offset: new Vector3(0.05, -0.15, 0.065),
	rotation: new Vector3(0.0, 155.0, 0.0),
	category: WeaponCategory.Shotgun
})

WEAPON_LIST.set(GetHashKey("WEAPON_PUMPSHOTGUN"), {
	model: new Model("w_sg_pumpshotgun"),
	bone: 24818,
	offset: new Vector3(0.05, -0.17, -0.02),
	rotation: new Vector3(180.0, 155.0, 0.0),
	category: WeaponCategory.Shotgun
})

WEAPON_LIST.set(GetHashKey("WEAPON_BEANBAG"), {
	model: new Model("w_sg_beanbag"),
	bone: 24818,
	offset: new Vector3(0.1, -0.17, -0.1),
	rotation: new Vector3(180.0, 155.0, 0.0),
	category: WeaponCategory.Shotgun
})

WEAPON_LIST.set(GetHashKey("WEAPON_HEAVYSHOTGUN"), {
	model: new Model("w_sg_heavyshotgun"),
	bone: 24818,
	offset: new Vector3(0.1, -0.15, 0.0),
	rotation: new Vector3(0.0, 225.0, 0.0),
	category: WeaponCategory.Shotgun
})

WEAPON_LIST.set(GetHashKey("WEAPON_GUSENBERG"), {
	model: new Model("w_sb_gusenberg"),
	bone: 24818,
	offset: new Vector3(0.1, -0.15, 0.0),
	rotation: new Vector3(0.0, 0.0, 0.0),
	category: WeaponCategory.SMG
})

WEAPON_LIST.set(GetHashKey("W_AR_ASSAULTRIFLEMK2"), {
	model: new Model("weapon_assaultrifle_mk2"),
	bone: 24818,
	offset: new Vector3(0.05, -0.17, -0.02),
	rotation: new Vector3(0.0, 155.0, 0.0),
	category: WeaponCategory.Assault
})

WEAPON_LIST.set(GetHashKey("W_AR_BULLPUPRIFLEMK2"), {
	model: new Model("weapon_bullpuprifle_mk2"),
	bone: 24818,
	offset: new Vector3(0.05, -0.17, -0.02),
	rotation: new Vector3(0.0, 155.0, 0.0),
	category: WeaponCategory.Assault
})

WEAPON_LIST.set(GetHashKey("WEAPON_CARBINERIFLE_MK2"), {
	model: new Model("W_AR_CARBINERIFLEMK2"),
	bone: 24818,
	offset: new Vector3(0.05, -0.17, -0.02),
	rotation: new Vector3(0.0, 155.0, 0.0),
	category: WeaponCategory.Assault
})

WEAPON_LIST.set(GetHashKey("WEAPON_AK74U"), {
	model: new Model("w_ar_ak74u"),
	bone: 24818,
	offset: new Vector3(0.05, -0.17, -0.02),
	rotation: new Vector3(0.0, 155.0, 0.0),
	category: WeaponCategory.Assault
})

WEAPON_LIST.set(GetHashKey("WEAPON_AKMS"), {
	model: new Model("w_ar_akms"),
	bone: 24818,
	offset: new Vector3(0.05, -0.17, -0.02),
	rotation: new Vector3(0.0, 155.0, 0.0),
	category: WeaponCategory.Assault
})

WEAPON_LIST.set(GetHashKey("weapon_compactrifle"), {
	model: new Model("w_ar_assaultrifle_smg"),
	bone: 24818,
	offset: new Vector3(0.05, -0.17, -0.02),
	rotation: new Vector3(0.0, 155.0, 0.0),
	category: WeaponCategory.Assault
})

WEAPON_LIST.set(GetHashKey("WEAPON_COMPACTRIFLE_MK2"), {
	model: new Model("w_ar_compactrifle_mk2"),
	bone: 24818,
	offset: new Vector3(0.05, -0.17, -0.02),
	rotation: new Vector3(0.0, 155.0, 0.0),
	category: WeaponCategory.Assault
})

WEAPON_LIST.set(GetHashKey("weapon_mossberg590"), {
	model: new Model("w_sg_mossberg590"),
	bone: 24818,
	offset: new Vector3(0.05, -0.17, -0.02),
	rotation: new Vector3(0.0, 155.0, 0.0),
	category: WeaponCategory.Assault
})
WEAPON_LIST.set(GetHashKey("weapon_p90"), {
	model: new Model("w_sb_p90"),
	bone: 24818,
	offset: new Vector3(0.05, -0.17, -0.02),
	rotation: new Vector3(0.0, 155.0, 0.0),
	category: WeaponCategory.Assault
})

WEAPON_LIST.set(GetHashKey("weapon_remington870"), {
	model: new Model("w_sg_remington870"),
	bone: 24818,
	offset: new Vector3(0.05, -0.17, -0.02),
	rotation: new Vector3(0.0, 155.0, 0.0),
	category: WeaponCategory.Assault
})

WEAPON_LIST.set(GetHashKey("weapon_spas12"), {
	model: new Model("w_sg_spas12"),
	bone: 24818,
	offset: new Vector3(0.05, -0.17, -0.02),
	rotation: new Vector3(0.0, 155.0, 0.0),
	category: WeaponCategory.Assault
})

WEAPON_LIST.set(GetHashKey("weapon_ump45"), {
	model: new Model("w_sb_ump45"),
	bone: 24818,
	offset: new Vector3(0.05, -0.17, -0.02),
	rotation: new Vector3(0.0, 155.0, 0.0),
	category: WeaponCategory.Assault
})

WEAPON_LIST.set(GetHashKey("weapon_specialcarbine_mk2"), {
	model: new Model("w_ar_specialcarbinemk2"),
	bone: 24818,
	offset: new Vector3(0.05, -0.17, -0.02),
	rotation: new Vector3(0.0, 155.0, 0.0),
	category: WeaponCategory.Assault
})

WEAPON_LIST.set(GetHashKey("WEAPON_ASSAULTRIFLE"), {
	model: new Model("w_ar_assaultrifle"),
	bone: 24818,
	offset: new Vector3(0.05, -0.17, -0.02),
	rotation: new Vector3(0.0, 155.0, 0.0),
	category: WeaponCategory.Assault
})

WEAPON_LIST.set(GetHashKey("WEAPON_ASSAULTRIFLE"), {
	model: new Model("w_ar_assaultrifle"),
	bone: 24818,
	offset: new Vector3(0.05, -0.17, -0.02),
	rotation: new Vector3(0.0, 155.0, 0.0),
	category: WeaponCategory.Assault
})

WEAPON_LIST.set(GetHashKey("WEAPON_ASSAULTRIFLE"), {
	model: new Model("w_ar_assaultrifle"),
	bone: 24818,
	offset: new Vector3(0.05, -0.17, -0.02),
	rotation: new Vector3(0.0, 155.0, 0.0),
	category: WeaponCategory.Assault
})

WEAPON_LIST.set(GetHashKey("WEAPON_ASSAULTRIFLE"), {
	model: new Model("w_ar_assaultrifle"),
	bone: 24818,
	offset: new Vector3(0.05, -0.17, -0.02),
	rotation: new Vector3(0.0, 155.0, 0.0),
	category: WeaponCategory.Assault
})

WEAPON_LIST.set(GetHashKey("WEAPON_ASSAULTRIFLE"), {
	model: new Model("w_ar_assaultrifle"),
	bone: 24818,
	offset: new Vector3(0.05, -0.17, -0.02),
	rotation: new Vector3(0.0, 155.0, 0.0),
	category: WeaponCategory.Assault
})

WEAPON_LIST.set(GetHashKey("WEAPON_ASSAULTRIFLE"), {
	model: new Model("w_ar_assaultrifle"),
	bone: 24818,
	offset: new Vector3(0.05, -0.17, -0.02),
	rotation: new Vector3(0.0, 155.0, 0.0),
	category: WeaponCategory.Assault
})

WEAPON_LIST.set(GetHashKey("WEAPON_ASSAULTRIFLE"), {
	model: new Model("w_ar_assaultrifle"),
	bone: 24818,
	offset: new Vector3(0.05, -0.17, -0.02),
	rotation: new Vector3(0.0, 155.0, 0.0),
	category: WeaponCategory.Assault
})

WEAPON_LIST.set(GetHashKey("WEAPON_ASSAULTRIFLE"), {
	model: new Model("w_ar_assaultrifle"),
	bone: 24818,
	offset: new Vector3(0.05, -0.17, -0.02),
	rotation: new Vector3(0.0, 155.0, 0.0),
	category: WeaponCategory.Assault
})

WEAPON_LIST.set(GetHashKey("WEAPON_ASSAULTRIFLE"), {
	model: new Model("w_ar_assaultrifle"),
	bone: 24818,
	offset: new Vector3(0.05, -0.17, -0.02),
	rotation: new Vector3(0.0, 155.0, 0.0),
	category: WeaponCategory.Assault
})

setImmediate(() => {
	let disabledWeapons: number[] = [];

	for (const weapon of DISABLED_WEAPONS) {
		disabledWeapons.push(GetHashKey(weapon.toUpperCase()));
	}
	for (const [hash] of WEAPON_LIST) {
		if (disabledWeapons.includes(hash)) {
			WEAPON_LIST.delete(hash);
		}
	}
})