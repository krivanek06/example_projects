import { WIDGET } from '../../model/width.model';
import { WidgetInterface } from '../../model/width.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
  providers: [
    { provide: WIDGET, useExisting: WeatherWidgetComponent }
  ]
})
export class WeatherWidgetComponent implements OnInit, WidgetInterface {

  constructor() { }

  ngOnInit(): void {
  }


  refresh() {
    console.log('Refreshing from weather');
  }
}
