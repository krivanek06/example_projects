import { CommonModule } from '@angular/common';
import { Component, DoBootstrap } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { VotingNewComponent } from './voting-new/voting-new.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	standalone: true,
	imports: [CommonModule, VotingNewComponent],
})
export class AppComponent implements DoBootstrap {
	// PR: https://github.com/angular/angular/pull/46475
	async ngDoBootstrap(): Promise<void> {
		await this.bootstrapApp();
	}

	private async bootstrapApp(): Promise<void> {
		// get a hand on the `ApplicationRef` to access its injector
		const applicationRef = await createApplication();

		// create a constructor of a custom element
		const votingNew = createCustomElement(VotingNewComponent, { injector: applicationRef.injector });

		// register in a browser
		customElements.define('voting-new', votingNew);
	}
}
