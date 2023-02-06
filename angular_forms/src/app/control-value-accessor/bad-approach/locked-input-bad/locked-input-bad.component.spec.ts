import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockedInputBadComponent } from './locked-input-bad.component';

describe('LockedInputBadComponent', () => {
  let component: LockedInputBadComponent;
  let fixture: ComponentFixture<LockedInputBadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LockedInputBadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LockedInputBadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
