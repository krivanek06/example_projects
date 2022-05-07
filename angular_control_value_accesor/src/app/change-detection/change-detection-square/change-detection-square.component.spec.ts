import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionSquareComponent } from './change-detection-square.component';

describe('ChangeDetectionSquareComponent', () => {
  let component: ChangeDetectionSquareComponent;
  let fixture: ComponentFixture<ChangeDetectionSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDetectionSquareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectionSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
