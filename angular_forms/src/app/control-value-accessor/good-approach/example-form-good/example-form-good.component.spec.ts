import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleFormGoodComponent } from './example-form-good.component';

describe('ExampleFormGoodComponent', () => {
  let component: ExampleFormGoodComponent;
  let fixture: ComponentFixture<ExampleFormGoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleFormGoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleFormGoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
