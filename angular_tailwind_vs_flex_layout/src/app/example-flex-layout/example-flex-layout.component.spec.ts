import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleFlexLayoutComponent } from './example-flex-layout.component';

describe('ExampleFlexLayoutComponent', () => {
  let component: ExampleFlexLayoutComponent;
  let fixture: ComponentFixture<ExampleFlexLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleFlexLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleFlexLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
