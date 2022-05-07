import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningWidgetComponent } from './planning-widget.component';

describe('PlanningWidgetComponent', () => {
  let component: PlanningWidgetComponent;
  let fixture: ComponentFixture<PlanningWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
