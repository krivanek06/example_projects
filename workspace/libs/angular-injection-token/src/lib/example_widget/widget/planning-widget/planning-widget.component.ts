import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { WIDGET, WidgetInterface } from '../../model/width.model';

@Component({
  selector: 'app-planning-widget',
  templateUrl: './planning-widget.component.html',
  styleUrls: ['./planning-widget.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule],
  providers: [{ provide: WIDGET, useExisting: PlanningWidgetComponent }],
})
export class PlanningWidgetComponent implements OnInit, WidgetInterface {
  constructor() {}

  ngOnInit(): void {}

  refresh() {
    console.log('Refreshing from Planning');
  }
}
