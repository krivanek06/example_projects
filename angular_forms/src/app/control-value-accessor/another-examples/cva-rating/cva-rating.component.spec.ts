import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvaRatingComponent } from './cva-rating.component';

describe('CvaRatingComponent', () => {
  let component: CvaRatingComponent;
  let fixture: ComponentFixture<CvaRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvaRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvaRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
