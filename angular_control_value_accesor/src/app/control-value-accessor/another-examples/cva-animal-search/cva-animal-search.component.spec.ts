import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvaAnimalSearchComponent } from './cva-animal-search.component';

describe('CvaAnimalSearchComponent', () => {
  let component: CvaAnimalSearchComponent;
  let fixture: ComponentFixture<CvaAnimalSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvaAnimalSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvaAnimalSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
