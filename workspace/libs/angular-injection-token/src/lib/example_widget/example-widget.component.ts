import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WidgetWrapperComponent } from './widget-wrapper/widget-wrapper.component';
import { PlanningWidgetComponent } from './widget/planning-widget/planning-widget.component';
import { WeatherWidgetComponent } from './widget/weather-widget/weather-widget.component';

@Component({
  selector: 'app-example-widget',
  templateUrl: './example-widget.component.html',
  styleUrls: ['./example-widget.component.scss'],
  standalone: true,
  imports: [CommonModule, WidgetWrapperComponent, PlanningWidgetComponent, WeatherWidgetComponent],
})
export class ExampleWidgetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
