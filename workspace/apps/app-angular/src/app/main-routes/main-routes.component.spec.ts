import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainRoutesComponent } from './main-routes.component';

describe('MainRoutesComponent', () => {
  let component: MainRoutesComponent;
  let fixture: ComponentFixture<MainRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainRoutesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
