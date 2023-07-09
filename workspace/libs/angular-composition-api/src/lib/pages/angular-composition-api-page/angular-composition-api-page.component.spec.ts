import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularCompositionApiPageComponent } from './angular-composition-api-page.component';

describe('AngularCompositionApiPageComponent', () => {
  let component: AngularCompositionApiPageComponent;
  let fixture: ComponentFixture<AngularCompositionApiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularCompositionApiPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularCompositionApiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
