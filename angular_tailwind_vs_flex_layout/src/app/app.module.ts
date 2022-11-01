import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexModule } from '@angular/flex-layout/flex';
import { GridModule } from '@angular/flex-layout/grid';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ExampleFlexLayoutComponent } from './example-flex-layout/example-flex-layout.component';
import { ExampleTailwindComponent } from './example-tailwind/example-tailwind.component';
import { ExampleTailwindMoreComponent } from './example-tailwind-more/example-tailwind-more.component';
@NgModule({
  declarations: [
    AppComponent,
    ExampleFlexLayoutComponent,
    ExampleTailwindComponent,
    ExampleTailwindMoreComponent,
  ],
  imports: [
    BrowserModule,
    FlexModule,
    GridModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
