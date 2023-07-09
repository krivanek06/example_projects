import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-example-renderer',
  templateUrl: './example-renderer.component.html',
  styleUrls: ['./example-renderer.component.scss'],
  standalone: true,
  imports: [HighlightDirective, MatButtonModule],
})
export class ExampleRendererComponent implements OnInit {
  @ViewChildren(HighlightDirective) highlightedItems!: QueryList<HighlightDirective>;
  items: string[] = ['Item-1', 'Item-2', 'Item-3', 'Item-4', 'Item-5', 'Item-6', 'Item-7'];

  constructor() {}

  ngOnInit(): void {}

  onBuy(): void {
    const markedItems = this.highlightedItems.filter((item) => item.marked);
    console.log(markedItems);
    console.log('========');
  }
}
