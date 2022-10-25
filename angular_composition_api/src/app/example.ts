import { Component, Directive, Pipe, PipeTransform } from '@angular/core';

@Directive()
export abstract class ParentCalculation {
	calculation1(value: number = 1): number {
		return 1 * value;
	}
	calculation2(value: number = 2): number {
		return 2 * value;
	}
}

@Component({
	selector: 'app-component1',
	template: `
		<button (click)="calculation1()">calculation1</button>
		<button (click)="calculation2()">calculation2</button>
	`,
})
export class Component1 extends ParentCalculation {
	constructor() {
		super();
	}
}

@Pipe({
	name: 'app-pipe1',
})
export class Pipe1 extends ParentCalculation implements PipeTransform {
	transform(value: number) {
		return this.calculation1(value);
	}
}
