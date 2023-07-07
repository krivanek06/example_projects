import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

type VoteType = 'Yes' | 'No';

@Component({
	selector: 'app-voting-new',
	templateUrl: './voting-new.component.html',
	styleUrls: ['./voting-new.component.scss'],
	standalone: true,
	imports: [CommonModule, MatButtonModule, MatCardModule, MatProgressBarModule],
	encapsulation: ViewEncapsulation.ShadowDom,
})
export class VotingNewComponent implements OnInit {
	@Output() voteClicked: EventEmitter<VoteType> = new EventEmitter<VoteType>();
	yesVotings = 50;
	noVotings = 50;

	constructor(private el: ElementRef) {}

	ngOnInit(): void {}

	// make public methods
	@Input() public logResult = () => console.log({ yesVotings: this.yesVotings, noVotings: this.noVotings });

	onVoteClick(type: VoteType): void {
		if (type === 'Yes') {
			this.yesVotings += 1;
			this.noVotings -= 1;
		} else {
			this.noVotings += 1;
			this.yesVotings -= 1;
		}
		this.dispatchClickEvent(type);
	}

	private dispatchClickEvent(type: VoteType): void {
		// angular emit
		this.voteClicked.emit(type);
		// custom emi for 'addEventListener()'
		this.el.nativeElement.dispatchEvent(new CustomEvent('is-voted'));
	}
}
