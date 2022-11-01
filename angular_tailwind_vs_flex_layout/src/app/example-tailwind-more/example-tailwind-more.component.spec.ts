import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleTailwindMoreComponent } from './example-tailwind-more.component';

describe('ExampleTailwindMoreComponent', () => {
  let component: ExampleTailwindMoreComponent;
  let fixture: ComponentFixture<ExampleTailwindMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleTailwindMoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleTailwindMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
