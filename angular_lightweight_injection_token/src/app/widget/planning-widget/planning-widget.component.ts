import { WIDGET } from '../../model/width.model';
import { WidgetInterface } from '../../model/width.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning-widget',
  templateUrl: './planning-widget.component.html',
  styleUrls: ['./planning-widget.component.scss'],
  providers: [
    { provide: WIDGET, useExisting: PlanningWidgetComponent }
  ]
})
export class PlanningWidgetComponent implements OnInit, WidgetInterface {

  constructor() { }

  ngOnInit(): void {
  }

  refresh() {
    console.log('Refreshing from Planning')
  }
}
