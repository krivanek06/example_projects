import { enableProdMode } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';

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
bootstrapApplication(AppComponent, {
	providers: [BrowserModule, BrowserAnimationsModule],
}).catch((err) => console.error(err));
