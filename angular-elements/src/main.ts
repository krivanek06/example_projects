import { enableProdMode } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { VotingNewComponent } from './app/voting-new/voting-new.component';

import { environment } from './environments/environment';

if (environment.production) {
	enableProdMode();
}

// old way of bootstraping
platformBrowserDynamic()
	.bootstrapModule(AppModule)
	.catch((err) => console.error(err));

// --------------------------------------------------------
// PR: https://github.com/angular/angular/pull/46475
// get a hand on the `ApplicationRef` to access its injector
createApplication({ providers: [] }).then((appRef) => {
	// create a constructor of a custom element
	const votingNew = createCustomElement(VotingNewComponent, { injector: appRef.injector });

	// register in a browser
	customElements.define('voting-new', votingNew);
});

// new way of bootstraping <== this does not work in when creating Angular elements
// bootstrapApplication(AppComponent, {
// 	providers: [],
// }).catch((err) => console.error(err));
