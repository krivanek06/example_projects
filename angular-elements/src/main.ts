import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { environment } from './environments/environment';

if (environment.production) {
	enableProdMode();
}

// old way of bootstraping
// platformBrowserDynamic()
// 	.bootstrapModule(AppModule)
// 	.catch((err) => console.error(err));

// new way of bootstraping
bootstrapApplication(AppComponent, {
	providers: [],
}).catch((err) => console.error(err));
