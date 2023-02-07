import { Country } from 'country-list';

export interface IFormGroupData {
	name: string;
	dogName: string;
	favoriteCountries: Country[];
	myFiends: IFiendControlData[];
}

export interface IFiendControlData {
	name: string;
	favoriteCountries: Country | null;
}

// export type ControlsOf<T extends Record<string, any>> = {
// 	[K in keyof T]: T[K] extends Record<any, any>
// 		? T[K] extends typeof Array<Object>
// 			? FormArray<FormGroup<ControlsOf<T[K]>>> | FormGroup<ControlsOf<T[K]>>
// 			: FormControl<T[K]>
// 		: FormControl<T[K]>;
// };

// export type Controls<TAbstractControl> = TAbstractControl extends FormGroup<
// 	infer TControls
// >
// 	? {
// 			[K in keyof TControls]: TControls[K];
// 	  }
// 	: TAbstractControl extends FormArray<infer TControls>
// 	? TControls[]
// 	: TAbstractControl extends FormControl
// 	? TAbstractControl
// 	: never;
