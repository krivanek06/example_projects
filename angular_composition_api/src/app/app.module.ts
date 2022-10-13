import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CompositionOldModule } from './composition-old/composition-old.module';
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
