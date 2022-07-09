import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleInjectComponent } from './example-inject/example-inject.component';
import { ExampleWidgetComponent } from './example_widget/example-widget.component';
import { WidgetWrapperComponent } from './example_widget/widget-wrapper/widget-wrapper.component';
import { PlanningWidgetComponent } from './example_widget/widget/planning-widget/planning-widget.component';
import { WeatherWidgetComponent } from './example_widget/widget/weather-widget/weather-widget.component';
import { MaterialImportsModule } from './material-imports.module';

@NgModule({
  declarations: [
    AppComponent,
    WidgetWrapperComponent,
    WeatherWidgetComponent,
    PlanningWidgetComponent,
    ExampleWidgetComponent,
    ExampleInjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MaterialImportsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
