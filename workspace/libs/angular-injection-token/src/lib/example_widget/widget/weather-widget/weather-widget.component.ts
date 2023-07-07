import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { WIDGET, WidgetInterface } from '../../model/width.model';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule],
  providers: [{ provide: WIDGET, useExisting: WeatherWidgetComponent }],
})
export class WeatherWidgetComponent implements OnInit, WidgetInterface {
  constructor() {}

  ngOnInit(): void {}

  refresh() {
    console.log('Refreshing from weather');
  }
}
