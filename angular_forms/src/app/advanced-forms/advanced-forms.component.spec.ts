import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedFormsComponent } from './advanced-forms.component';

describe('AdvancedFormsComponent', () => {
  let component: AdvancedFormsComponent;
  let fixture: ComponentFixture<AdvancedFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
