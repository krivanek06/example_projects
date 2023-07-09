import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasicFormFunctionComponent } from './basic-form-function.component';

describe('BasicFormFunctionComponent', () => {
  let component: BasicFormFunctionComponent;
  let fixture: ComponentFixture<BasicFormFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicFormFunctionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BasicFormFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
