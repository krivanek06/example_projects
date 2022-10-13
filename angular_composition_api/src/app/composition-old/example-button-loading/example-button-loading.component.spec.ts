import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleButtonLoadingComponent } from './example-button-loading.component';

describe('ExampleButtonLoadingComponent', () => {
  let component: ExampleButtonLoadingComponent;
  let fixture: ComponentFixture<ExampleButtonLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleButtonLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleButtonLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
