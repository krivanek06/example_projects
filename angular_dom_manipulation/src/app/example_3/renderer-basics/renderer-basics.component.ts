import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-renderer-basics',
  templateUrl: './renderer-basics.component.html',
  styleUrls: ['./renderer-basics.component.scss'],
})
export class RendererBasicsComponent implements OnInit {
  @ViewChildren(HighlightDirective) highlightedItems: QueryList<HighlightDirective>;
  items: string[] = ['Item-1', 'Item-2', 'Item-3', 'Item-4', 'Item-5', 'Item-6', 'Item-7'];

  constructor() {}

  ngOnInit(): void {}

  onBuy(): void {
    const markedItems = this.highlightedItems.filter((item) => item.marked);
    console.log(markedItems);
    console.log('========');
  }
}
