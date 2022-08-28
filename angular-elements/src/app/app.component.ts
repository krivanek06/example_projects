import { DoBootstrap } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { VotingNewComponent } from './voting-new/voting-new.component';

// @Component({
// 	selector: 'app-root',
// 	template: ``,
// 	styleUrls: [],
// 	standalone: true,
// })
export class AppComponent implements DoBootstrap {
	// PR: https://github.com/angular/angular/pull/46475
	async ngDoBootstrap(): Promise<void> {
		// get a hand on the `ApplicationRef` to access its injector
		const applicationRef = await createApplication();

		// create a constructor of a custom element
		const votingNew = createCustomElement(VotingNewComponent, { injector: applicationRef.injector });

		// register in a browser
		customElements.define('voting-new', votingNew);
	}
}
