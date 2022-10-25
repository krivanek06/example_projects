import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleCompositionApiComponent } from './example-composition-api.component';

describe('ExampleCompositionApiComponent', () => {
  let component: ExampleCompositionApiComponent;
  let fixture: ComponentFixture<ExampleCompositionApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleCompositionApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleCompositionApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
