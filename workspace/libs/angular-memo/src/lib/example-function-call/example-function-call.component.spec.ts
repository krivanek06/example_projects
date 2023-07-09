import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleFunctionCallComponent } from './example-function-call.component';

describe('ExampleFunctionCallComponent', () => {
  let component: ExampleFunctionCallComponent;
  let fixture: ComponentFixture<ExampleFunctionCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleFunctionCallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleFunctionCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
