import { WIDGET, WidgetInterface } from '../model/width.model';
import { Component, ContentChild, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.scss']
})
export class WidgetWrapperComponent implements OnInit {

  @ContentChild(WIDGET) widget: WidgetInterface | undefined;
  @Input() header: string = '';

  isRefreshing = false;

  constructor() { }

  ngOnInit(): void {
  }

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
