import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockedInputGoodComponent } from './locked-input-good.component';

describe('LockedInputGoodComponent', () => {
  let component: LockedInputGoodComponent;
  let fixture: ComponentFixture<LockedInputGoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LockedInputGoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LockedInputGoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
