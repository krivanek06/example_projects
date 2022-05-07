import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiUselessComponentComponent } from './ui-useless-component.component';

describe('UiUselessComponentComponent', () => {
  let component: UiUselessComponentComponent;
  let fixture: ComponentFixture<UiUselessComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiUselessComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiUselessComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
