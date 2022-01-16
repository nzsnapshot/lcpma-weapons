import { Prop, Weapon } from "@nativewrappers/client";

export interface WeaponTypes {
	melee: Prop | undefined,
	handgun: Prop | undefined,
	// Heavy would be any AR, Sniper Rifle, etc.
	heavy: Prop | undefined
}

// This would be the local players current weapons
export interface CurrentWeapons {
	melee: number,
	handgun: number,
	// Heavy would be any AR, Sniper Rifle, etc.
	heavy: number
}

export const WEAPON_BAG_TYPES: string[] = ["weapons:melee", "weapons:handGuns", "weapons:heavy"]