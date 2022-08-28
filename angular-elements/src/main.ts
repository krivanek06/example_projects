import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
	enableProdMode();
}

// old way of bootstraping
platformBrowserDynamic()
	.bootstrapModule(AppModule)
	.catch((err) => console.error(err));

// new way of bootstraping
// bootstrapApplication(AppComponent, {
// 	providers: [],
// }).catch((err) => console.error(err));
