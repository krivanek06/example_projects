import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { delay, of } from 'rxjs';
import { ButtonDirective, ButtonPrimaryDirective, ButtonSuccessDirective } from './examples/button.directive';
import { CompositionMatButtonComponent } from './examples/composition-mat-button.component';
import { ActiveDirective, ActiveService, ToggleActiveDirective } from './examples/ifActive.directive';

@Component({
	selector: 'app-composition-new',
	templateUrl: './composition-new.component.html',
	styleUrls: ['./composition-new.component.scss'],
	imports: [
		ButtonDirective,
		ButtonSuccessDirective,
		ButtonPrimaryDirective,
		MatButtonModule,
		ToggleActiveDirective,
		ActiveDirective,
		CompositionMatButtonComponent,
	],
	standalone: true,
	providers: [ActiveService],
})
export class CompositionNewComponent {
	constructor(private activeService: ActiveService) {
		// mocking HTTP request -> reveal content after 2sec
		of([])
			.pipe(delay(2000))
			.subscribe(() => this.activeService.toggleActivation());
	}
}
