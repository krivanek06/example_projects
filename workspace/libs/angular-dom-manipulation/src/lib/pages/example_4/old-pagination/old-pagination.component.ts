import { Component } from '@angular/core';

@Component({
  selector: 'app-old-pagination',
  templateUrl: './old-pagination.component.html',
  styleUrls: ['./old-pagination.component.scss'],
})
export class OldPaginationComponent {
  items: string[] = [
    'Item-1',
    'Item-2',
    'Item-3',
    'Item-4',
    'Item-5',
    'Item-6',
    'Item-7',
    'Item-8',
    'Item-9',
    'Item-10',
    'Item-11',
    'Item-12',
  ];

  // how many items we want to display maximum
  paginationLength = 3;

  // index of the page we are in right now
  currentPage = 0;

  get dataSliceStart(): number {
    return this.currentPage * this.paginationLength;
  }

  onPageChange(pageIndex: number): void {
    this.currentPage = pageIndex;
  }
}
