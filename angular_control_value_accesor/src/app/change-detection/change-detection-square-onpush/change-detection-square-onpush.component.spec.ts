import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionSquareOnpushComponent } from './change-detection-square-onpush.component';

describe('ChangeDetectionSquareOnpushComponent', () => {
  let component: ChangeDetectionSquareOnpushComponent;
  let fixture: ComponentFixture<ChangeDetectionSquareOnpushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDetectionSquareOnpushComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectionSquareOnpushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
