import { WEAPON_LIST } from "../shared/utils";

RegisterCommand('resetmodel', (src: number) => {
    let plyState = Player(src).state;
    plyState.set('gunModel', 0, true);
}, false)

RegisterCommand('setweapon', (src: number, args: unknown[]) => {
	const hash = GetHashKey(args[0] as string);
	let plyState = Player(src).state;
	plyState.set('gunModel', hash, true);
}, false)


AddStateBagChangeHandler("gunModel", null, (bagName: string, key: string, value: number, reserved: number, replicated: boolean) => {
	const plySrc: number = Number(bagName.replace("player:", ''))
	if (value == 0) {
		return;
	}
	const weaponInfo = WEAPON_LIST.get(value)
	if(!weaponInfo) {
		// Anticheat
	};
})