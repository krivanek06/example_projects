import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CompositionOldModule } from './composition-old/composition-old.module';
import { CompositionNewComponent } from './composition_v_15/composition-new.component';
import { Component1, Pipe1 } from './example';
import { MaterialModule } from './material.module';
import { SharedModule } from './shared.module';

@NgModule({
	declarations: [AppComponent, Component1, Pipe1],
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
