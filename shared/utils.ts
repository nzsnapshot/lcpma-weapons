
import { Model, Vector3 } from "@nativewrappers/client"

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

WEAPON_LIST.set(GetHashKey("WEAPON_BOTTLE"), {
	model: new Model("prop_w_me_bottle"),
	bone: 24818,
	offset: new Vector3(0.1, -0.15, 0.0),
	rotation: new Vector3(0.0, 0.0, 0.0),
	category: WeaponCategory.Melee
})

WEAPON_LIST.set(GetHashKey("WEAPON_KNUCKLE"), {
	model: new Model("prop_w_me_dagger"),
	bone: 24818,
	offset: new Vector3(0.1, -0.15, 0.0),
	rotation: new Vector3(0.0, 0.0, 0.0),
	category: WeaponCategory.Melee
})

WEAPON_LIST.set(GetHashKey("WEAPON_SWITCHBLADE"), {
	model: new Model("prop_w_me_dagger"),
	bone: 24818,
	offset: new Vector3(0.1, -0.15, 0.0),
	rotation: new Vector3(0.0, 0.0, 0.0),
	category: WeaponCategory.Melee
})

WEAPON_LIST.set(GetHashKey("WEAPON_FLAREGUN"), {
	model: new Model("w_pi_flaregun"),
	bone: 58271,
	offset: new Vector3(-0.01, 0.1, -0.07),
	rotation: new Vector3(-55.0, 0.1, 0.0),
	category: WeaponCategory.HandGuns
})

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

WEAPON_LIST.set(GetHashKey("WEAPON_STICKYBOMB"), {
	model: new Model("prop_bomb_01_s"),
	bone: 24818,
	offset: new Vector3(0.1, -0.15, 0.0),
	rotation: new Vector3(0.0, 0.0, 0.0),
	category: WeaponCategory.Throw
})

WEAPON_LIST.set(GetHashKey("WEAPON_MOLOTOV"), {
	model: new Model("w_ex_molotov"),
	bone: 24818,
	offset: new Vector3(0.1, -0.15, 0.0),
	rotation: new Vector3(0.0, 0.0, 0.0),
	category: WeaponCategory.Throw
})

WEAPON_LIST.set(GetHashKey("WEAPON_FIREEXTINGUISHER"), {
	model: new Model("w_am_fire_exting"),
	bone: 24818,
	offset: new Vector3(0.1, -0.15, 0.0),
	rotation: new Vector3(0.0, 0.0, 0.0),
	category: WeaponCategory.Throw
})

WEAPON_LIST.set(GetHashKey("WEAPON_PETROLCAN"), {
	model: new Model("w_am_jerrycan"),
	bone: 24818,
	offset: new Vector3(0.1, -0.15, 0.0),
	rotation: new Vector3(0.0, 0.0, 0.0),
	category: WeaponCategory.Throw
})

WEAPON_LIST.set(GetHashKey("WEAPON_SNOWBALL"), {
	model: new Model("w_ex_snowball"),
	bone: 24818,
	offset: new Vector3(0.1, -0.15, 0.0),
	rotation: new Vector3(0.0, 0.0, 0.0),
	category: WeaponCategory.Throw
})

WEAPON_LIST.set(GetHashKey("WEAPON_BALL"), {
	model: new Model("w_am_baseball"),
	bone: 24818,
	offset: new Vector3(0.1, -0.15, 0.0),
	rotation: new Vector3(0.0, 0.0, 0.0),
	category: WeaponCategory.Throw
})

WEAPON_LIST.set(GetHashKey("WEAPON_GRENADE"), {
	model: new Model("w_ex_grenadefrag"),
	bone: 24818,
	offset: new Vector3(0.1, -0.15, 0.0),
	rotation: new Vector3(0.0, 0.0, 0.0),
	category: WeaponCategory.Throw
})

WEAPON_LIST.set(GetHashKey("WEAPON_SMOKEGRENADE"), {
	model: new Model("w_ex_grenadesmoke"),
	bone: 24818,
	offset: new Vector3(0.1, -0.15, 0.0),
	rotation: new Vector3(0.0, 0.0, 0.0),
	category: WeaponCategory.Throw
})

WEAPON_LIST.set(GetHashKey("WEAPON_BZGAS"), {
	model: new Model("w_ex_grenadesmoke"),
	bone: 24818,
	offset: new Vector3(0.1, -0.15, 0.0),
	rotation: new Vector3(0.0, 0.0, 0.0),
	category: WeaponCategory.Throw
})

WEAPON_LIST.set(GetHashKey("WEAPON_DIGISCANNER"), {
	model: new Model("w_am_digiscanner"),
	bone: 24818,
	offset: new Vector3(0.1, -0.15, 0.0),
	rotation: new Vector3(0.0, 0.0, 0.0),
	category: WeaponCategory.Other
})

WEAPON_LIST.set(GetHashKey("WEAPON_DAGGER"), {
	model: new Model("prop_w_me_dagger"),
	bone: 51826,
	offset: new Vector3(0.1, -0.15, 0.0),
	rotation: new Vector3(0.0, 0.0, 0.0),
	category: WeaponCategory.Other
})

WEAPON_LIST.set(GetHashKey("WEAPON_WRENCH"), {
	model: new Model("w_me_hammer"),
	bone: 24818,
	offset: new Vector3(0.1, -0.15, 0.0),
	rotation: new Vector3(0.0, 0.0, 0.0),
	category: WeaponCategory.Other
})

WEAPON_LIST.set(GetHashKey("WEAPON_VINTAGEPISTOL"), {
	model: new Model("w_pi_vintage_pistol"),
	bone: 51826,
	offset: new Vector3(-0.01, 0.1, 0.07),
	rotation: new Vector3(-115.0, 0.0, 0.0),
	category: WeaponCategory.HandGuns
})

WEAPON_LIST.set(GetHashKey("WEAPON_BULLPUPRIFLE"), {
	model: new Model("w_ar_bullpuprifle"),
	bone: 24818,
	offset: new Vector3(0.05, -0.17, -0.02),
	rotation: new Vector3(0.0, 155.0, 0.0),
	category: WeaponCategory.Assault
})

WEAPON_LIST.set(GetHashKey("WEAPON_CROWBAR"), {
	model: new Model("w_me_crowbar"),
	bone: 24818,
	offset: new Vector3(-0.1, -0.15, -0.0),
	rotation: new Vector3(180.0, 90.0, 0.0),
	category: WeaponCategory.Melee
})

WEAPON_LIST.set(GetHashKey("WEAPON_SNIPERRIFLE"), {
	model: new Model("w_sr_sniperrifle"),
	bone: 24818,
	offset: new Vector3(0.1, -0.15, 0.0),
	rotation: new Vector3(0.0, 0.0, 0.0),
	category: WeaponCategory.Sniper
})

WEAPON_LIST.set(GetHashKey("WEAPON_HEAVYPISTOL"), {
	model: new Model("w_pi_heavypistol"),
	bone: 51826,
	offset: new Vector3(-0.01, 0.1, 0.07),
	rotation: new Vector3(-115.0, 0.0, 0.0),
	category: WeaponCategory.HandGuns
})

WEAPON_LIST.set(GetHashKey("WEAPON_POOLCUE"), {
	model: new Model("w_me_poolcue"),
	bone: 24818,
	offset: new Vector3(-0.25, -0.17, -0.0),
	rotation: new Vector3(180.0, 90.0, 0.0),
	category: WeaponCategory.Melee
})

WEAPON_LIST.set(GetHashKey("WEAPON_PISTOL"), {
	model: new Model("w_pi_pistol"),
	bone: 51826,
	offset: new Vector3(-0.01, 0.1, 0.07),
	rotation: new Vector3(-115.0, 0.0, 0.0),
	category: WeaponCategory.HandGuns
})

WEAPON_LIST.set(GetHashKey("WEAPON_SMG"), {
	model: new Model("w_sb_smg"),
	bone: 24818,
	offset: new Vector3(0.0, -0.15, 0.0),
	rotation: new Vector3(0.0, 155.0, 0.0),
	category: WeaponCategory.SMG
})

WEAPON_LIST.set(GetHashKey("WEAPON_GOLFCLUB"), {
	model: new Model("w_me_gclub"),
	bone: 24818,
	offset: new Vector3(-0.1, -0.15, -0.0),
	rotation: new Vector3(180.0, 90.0, 0.0),
	category: WeaponCategory.Melee
})

WEAPON_LIST.set(GetHashKey("WEAPON_MACHETE"), {
	model: new Model("prop_ld_w_me_machette"),
	bone: 24818,
	offset: new Vector3(-0.1, -0.15, -0.0),
	rotation: new Vector3(180.0, 90.0, 0.0),
	category: WeaponCategory.Melee
})

WEAPON_LIST.set(GetHashKey("WEAPON_FLASHLIGHT"), {
	model: new Model("prop_w_me_dagger"),
	bone: 58271,
	offset: new Vector3(0.0, 0.0, 0.0),
	rotation: new Vector3(0.0, 0.0, 0.0),
	category: WeaponCategory.Melee
})

WEAPON_LIST.set(GetHashKey("WEAPON_HAMMER"), {
	model: new Model("prop_tool_hammer"),
	bone: 51826,
	offset: new Vector3(0.1, -0.15, 0.0),
	rotation: new Vector3(0.0, 0.0, 0.0),
	category: WeaponCategory.Melee
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

WEAPON_LIST.set(GetHashKey("WEAPON_APPISTOL"), {
	model: new Model("w_pi_appistol"),
	bone: 51826,
	offset: new Vector3(-0.01, 0.1, 0.07),
	rotation: new Vector3(-115.0, 0.0, 0.0),
	category: WeaponCategory.HandGuns
})

WEAPON_LIST.set(GetHashKey("WEAPON_BATTLEAXE"), {
	model: new Model("w_me_battleaxe"),
	bone: 24818,
	offset: new Vector3(-0.1, -0.15, -0.0),
	rotation: new Vector3(180.0, 90.0, 0.0),
	category: WeaponCategory.Melee
})

WEAPON_LIST.set(GetHashKey("WEAPON_STUNGUN"), {
	model: new Model("w_pi_stungun"),
	bone: 58271,
	offset: new Vector3(-0.01, 0.1, -0.07),
	rotation: new Vector3(-55.0, 0.1, 0.0),
	category: WeaponCategory.HandGuns
})

WEAPON_LIST.set(GetHashKey("WEAPON_PISTOL50"), {
	model: new Model("w_pi_pistol50"),
	bone: 51826,
	offset: new Vector3(-0.01, 0.1, 0.07),
	rotation: new Vector3(-115.0, 0.0, 0.0),
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

WEAPON_LIST.set(GetHashKey("WEAPON_KNIFE"), {
	model: new Model("prop_w_me_knife_01"),
	bone: 24818,
	offset: new Vector3(0.1, -0.15, 0.0),
	rotation: new Vector3(0.0, 0.0, 0.0),
	category: WeaponCategory.Melee
})

WEAPON_LIST.set(GetHashKey("WEAPON_MICROSMG"), {
	model: new Model("w_sb_microsmg"),
	bone: 51826,
	offset: new Vector3(0.0, 0.009, 0.15),
	rotation: new Vector3(270.0, -10.0, 0.0),
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

WEAPON_LIST.set(GetHashKey("WEAPON_HATCHET"), {
	model: new Model("w_me_hatchet"),
	bone: 24818,
	offset: new Vector3(0.1, -0.15, 0.0),
	rotation: new Vector3(0.0, 0.0, 0.0),
	category: WeaponCategory.Melee
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

WEAPON_LIST.set(GetHashKey("WEAPON_NIGHTSTICK"), {
	model: new Model("w_me_nightstick"),
	bone: 51826,
	offset: new Vector3(-0.15, 0.07, 0.125),
	rotation: new Vector3(270.0, 90.0, 0.0),
	category: WeaponCategory.Melee
})

WEAPON_LIST.set(GetHashKey("WEAPON_GUSENBERG"), {
	model: new Model("w_sb_gusenberg"),
	bone: 24818,
	offset: new Vector3(0.1, -0.15, 0.0),
	rotation: new Vector3(0.0, 0.0, 0.0),
	category: WeaponCategory.SMG
})

WEAPON_LIST.set(GetHashKey("WEAPON_COMBATPISTOL"), {
	model: new Model("w_pi_combatpistol"),
	bone: 51826,
	offset: new Vector3(-0.01, 0.1, 0.07),
	rotation: new Vector3(-115.0, 0.0, 0.0),
	category: WeaponCategory.HandGuns
})

WEAPON_LIST.set(GetHashKey("WEAPON_SNSPISTOL"), {
	model: new Model("w_pi_sns_pistol"),
	bone: 58271,
	offset: new Vector3(-0.01, 0.1, -0.07),
	rotation: new Vector3(-55.0, 0.1, 0.0),
	category: WeaponCategory.HandGuns
})

WEAPON_LIST.set(GetHashKey("WEAPON_BAT"), {
	model: new Model("w_me_bat"),
	bone: 24818,
	offset: new Vector3(-0.25, -0.17, -0.0),
	rotation: new Vector3(90.0, 90.0, 0.0),
	category: WeaponCategory.Melee
})
