import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvaFlagSelectComponent } from './cva-flag-select.component';

describe('CvaFlagSelectComponent', () => {
  let component: CvaFlagSelectComponent;
  let fixture: ComponentFixture<CvaFlagSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvaFlagSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvaFlagSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
