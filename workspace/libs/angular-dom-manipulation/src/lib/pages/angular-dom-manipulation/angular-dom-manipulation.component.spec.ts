import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularDomManipulationComponent } from './angular-dom-manipulation.component';

describe('AngularDomManipulationComponent', () => {
  let component: AngularDomManipulationComponent;
  let fixture: ComponentFixture<AngularDomManipulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularDomManipulationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularDomManipulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
