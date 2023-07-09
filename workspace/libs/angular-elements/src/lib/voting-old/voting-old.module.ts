import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { VotingOldComponent } from './voting-old.component';

@NgModule({
	declarations: [VotingOldComponent],
	imports: [CommonModule, MatButtonModule, MatCardModule, MatProgressBarModule],
	exports: [VotingOldComponent],
	bootstrap: [VotingOldComponent], // can be removed, works without bootstrap
})
export class VotingOldModule {}
