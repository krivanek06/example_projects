import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrySelectorControlComponent } from './country-selector-control.component';

describe('CountrySelectorControlComponent', () => {
  let component: CountrySelectorControlComponent;
  let fixture: ComponentFixture<CountrySelectorControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountrySelectorControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountrySelectorControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
