import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingOldComponent } from './voting-old.component';

describe('VotingOldComponent', () => {
  let component: VotingOldComponent;
  let fixture: ComponentFixture<VotingOldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotingOldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VotingOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
