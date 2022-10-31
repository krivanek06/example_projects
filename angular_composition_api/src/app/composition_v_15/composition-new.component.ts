import { DragDropModule } from '@angular/cdk/drag-drop';
import { Component, Host, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { delay, of } from 'rxjs';
import {
	ButtonDirective,
	ButtonDirectiveEnhancedDirective,
	ButtonPrimaryDirective,
	TestComponent,
} from './examples/button.directive';
import { DestroyDirective } from './examples/destroy.directive';
import { ActiveDirective, ActiveService, ToggleActiveDirective } from './examples/ifActive.directive';
import { InputCompositionComponent } from './examples/input-composition.directive';
import { InputTrackingDirective, TypingTrackingDirective } from './examples/input-tracking.directive';

@Component({
	selector: 'app-composition-new',
	templateUrl: './composition-new.component.html',
	styleUrls: ['./composition-new.component.scss'],
	imports: [
		ButtonDirective,
		ButtonPrimaryDirective,
		MatButtonModule,
		ToggleActiveDirective,
		ActiveDirective,
		TypingTrackingDirective,
		//DestroyDirective,
		ButtonDirectiveEnhancedDirective,
		InputTrackingDirective,
		MatInputModule,
		MatFormFieldModule,
		ReactiveFormsModule,
		InputCompositionComponent,
		TestComponent,
		DragDropModule,
		MatTooltipModule,
		// ButtonTooltipDirective,
	],
	standalone: true,
	providers: [ActiveService, DestroyDirective],
})
export class CompositionNewComponent {
	control = new FormControl<string>('');

	private untilDestroyed = inject(DestroyDirective).pipe;

	constructor(@Host() private activeService: ActiveService) {
		// mocking HTTP request -> reveal content after 2sec
		const randomDelay = this.randomNumberMs(1, 7);
		console.log('randomDelay', randomDelay);
		of([])
			.pipe(delay(randomDelay), this.untilDestroyed)
			.subscribe(() => this.activeService.toggleActivation());

		this.control.valueChanges.subscribe((x) => console.log('Value from app-input-composition: ', x));
	}

	private randomNumberMs(minimum: number, maximum: number) {
		return (Math.floor(Math.random() * (maximum - minimum + 1)) + minimum) * 1000;
	}
}
