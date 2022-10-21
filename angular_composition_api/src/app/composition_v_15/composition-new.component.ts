import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { delay, of } from 'rxjs';
import { ButtonDirective, ButtonPrimaryDirective, ButtonSuccessDirective } from './examples/button.directive';
import { ActiveDirective, ActiveService, ToggleActiveDirective } from './examples/ifActive.directive';
import { InputCompositionComponent } from './examples/input-composition.directive';
import { InputTrackingDirective, TypingTrackingDirective } from './examples/input-tracking.directive';

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
		TypingTrackingDirective,
		InputTrackingDirective,
		MatInputModule,
		MatFormFieldModule,
		ReactiveFormsModule,
		InputCompositionComponent,
	],
	standalone: true,
	providers: [ActiveService],
})
export class CompositionNewComponent {
	control = new FormControl<string>('');
	constructor(private activeService: ActiveService) {
		// mocking HTTP request -> reveal content after 2sec
		of([])
			.pipe(delay(2000))
			.subscribe(() => this.activeService.toggleActivation());

		this.control.valueChanges.subscribe((x) => console.log('Value from app-input-composition: ', x));
	}
}