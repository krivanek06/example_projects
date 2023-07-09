import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositionOldComponent } from './composition-old.component';

describe('CompositionOldComponent', () => {
  let component: CompositionOldComponent;
  let fixture: ComponentFixture<CompositionOldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompositionOldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompositionOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
