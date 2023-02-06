import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleFormBadComponent } from './example-form-bad.component';

describe('ExampleFormBadComponent', () => {
  let component: ExampleFormBadComponent;
  let fixture: ComponentFixture<ExampleFormBadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleFormBadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleFormBadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
