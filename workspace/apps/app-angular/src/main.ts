import { createCustomElement } from '@angular/elements';
import { bootstrapApplication, createApplication } from '@angular/platform-browser';
import { VotingNewComponent } from '@workspace/angular-elements';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));

// --------------------------------------------------------
// PR: https://github.com/angular/angular/pull/46475
// get a hand on the `ApplicationRef` to access its injector
createApplication({ providers: [] }).then((appRef) => {
  // create a constructor of a custom element
  const votingNew = createCustomElement(VotingNewComponent, { injector: appRef.injector });

  // register in a browser
  customElements.define('voting-new', votingNew);
});
