import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleFunctionCallAsyncComponent } from './example-function-call-async.component';

describe('ExampleFunctionCallAsyncComponent', () => {
  let component: ExampleFunctionCallAsyncComponent;
  let fixture: ComponentFixture<ExampleFunctionCallAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleFunctionCallAsyncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleFunctionCallAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
