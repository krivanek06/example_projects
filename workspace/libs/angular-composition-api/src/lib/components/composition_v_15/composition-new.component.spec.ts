import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositionNewComponent } from './composition-new.component';

describe('CompositionApiComponent', () => {
	let component: CompositionNewComponent;
	let fixture: ComponentFixture<CompositionNewComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CompositionNewComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(CompositionNewComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
