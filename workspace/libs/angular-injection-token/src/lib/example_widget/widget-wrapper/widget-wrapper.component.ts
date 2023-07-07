import { CommonModule } from '@angular/common';
import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { WIDGET, WidgetInterface } from '../model/width.model';

@Component({
  selector: 'app-widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule, MatProgressSpinnerModule],
})
export class WidgetWrapperComponent implements OnInit {
  @ContentChild(WIDGET) widget: WidgetInterface | undefined;
  @Input() header: string = '';

  isRefreshing = false;

  constructor() {}

  ngOnInit(): void {}

  refresh() {
    if (this.widget) {
      this.widget.refresh();
    }
    this.isRefreshing = true;
    setTimeout(() => {
      this.isRefreshing = false;
    }, 2500);
  }
}
