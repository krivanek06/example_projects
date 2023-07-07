import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsHigherOrderMappingComponent } from './rxjs-higher-order-mapping.component';

describe('RxjsHigherOrderMappingComponent', () => {
  let component: RxjsHigherOrderMappingComponent;
  let fixture: ComponentFixture<RxjsHigherOrderMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsHigherOrderMappingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsHigherOrderMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
