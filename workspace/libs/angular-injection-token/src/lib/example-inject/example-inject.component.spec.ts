import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleInjectComponent } from './example-inject.component';

describe('ExampleInjectComponent', () => {
  let component: ExampleInjectComponent;
  let fixture: ComponentFixture<ExampleInjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleInjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleInjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
