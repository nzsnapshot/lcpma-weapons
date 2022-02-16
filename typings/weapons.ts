import { Prop } from "@nativewrappers/client/lib/models/Prop";

export interface WeaponTypes {
	melee: Prop | null,
	handgun: Prop | null,
	// Heavy would be any AR, Sniper Rifle, etc.
	heavy: Prop | null
}

// This would be the local players current weapons
export interface CurrentWeapons {
	melee: number,
	handgun: number,
	// Heavy would be any AR, Sniper Rifle, etc.
	heavy: number
}

export const WEAPON_BAG_TYPES: string[] = ["weapons:melee", "weapons:handGuns", "weapons:heavy"]