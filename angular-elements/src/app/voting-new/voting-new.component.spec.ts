import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingNewComponent } from './voting-new.component';

describe('VotingNewComponent', () => {
  let component: VotingNewComponent;
  let fixture: ComponentFixture<VotingNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotingNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VotingNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
