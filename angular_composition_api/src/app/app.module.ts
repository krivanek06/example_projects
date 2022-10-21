import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CompositionOldModule } from './composition-old/composition-old.module';
import { CompositionNewComponent } from './composition_v_15/composition-new.component';
import { MaterialModule } from './material.module';
import { SharedModule } from './shared.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		SharedModule,
		MaterialModule,
		CompositionOldModule,
		CompositionNewComponent,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
