import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsoleLogExamplesComponent } from './console-log-examples.component';

describe('ConsoleLogExamplesComponent', () => {
  let component: ConsoleLogExamplesComponent;
  let fixture: ComponentFixture<ConsoleLogExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsoleLogExamplesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConsoleLogExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
