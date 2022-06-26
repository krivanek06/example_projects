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
import { WidgetWrapperComponent } from './widget-wrapper/widget-wrapper.component';
import { PlanningWidgetComponent } from './widget/planning-widget/planning-widget.component';
import { WeatherWidgetComponent } from './widget/weather-widget/weather-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetWrapperComponent,
    WeatherWidgetComponent,
    PlanningWidgetComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
