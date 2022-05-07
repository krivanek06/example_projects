import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsMappingComponent } from './rxjs-mapping.component';

describe('RxjsMappingComponent', () => {
  let component: RxjsMappingComponent;
  let fixture: ComponentFixture<RxjsMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsMappingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
