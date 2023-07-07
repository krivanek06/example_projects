import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleMemoComponent } from './example-memo.component';

describe('ExampleMemoComponent', () => {
  let component: ExampleMemoComponent;
  let fixture: ComponentFixture<ExampleMemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleMemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleMemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
