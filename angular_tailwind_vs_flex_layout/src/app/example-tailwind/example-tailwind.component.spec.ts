import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleTailwindComponent } from './example-tailwind.component';

describe('ExampleTailwindComponent', () => {
  let component: ExampleTailwindComponent;
  let fixture: ComponentFixture<ExampleTailwindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleTailwindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleTailwindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
