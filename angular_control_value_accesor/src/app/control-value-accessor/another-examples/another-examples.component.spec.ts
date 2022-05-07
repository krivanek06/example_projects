import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherExamplesComponent } from './another-examples.component';

describe('AnotherExamplesComponent', () => {
  let component: AnotherExamplesComponent;
  let fixture: ComponentFixture<AnotherExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
