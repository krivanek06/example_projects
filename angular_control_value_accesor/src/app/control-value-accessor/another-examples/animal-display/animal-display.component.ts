import { Component, Input, OnInit } from '@angular/core';
import { CVAnimal } from '../model';

@Component({
	selector: 'app-animal-display',
	templateUrl: './animal-display.component.html',
	styleUrls: ['./animal-display.component.scss'],
})
export class AnimalDisplayComponent implements OnInit {
	@Input() animal!: CVAnimal;
	@Input() alreadySelected = false;

	constructor() {}

	ngOnInit(): void {}
}
