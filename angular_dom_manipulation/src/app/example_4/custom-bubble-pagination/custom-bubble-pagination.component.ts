import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-custom-bubble-pagination',
  templateUrl: './custom-bubble-pagination.component.html',
  styleUrls: ['./custom-bubble-pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomBubblePaginationComponent implements OnInit, OnChanges {
  @Output() changePageEmitter: EventEmitter<number> = new EventEmitter<number>();

  /*
   * how many data are total to be displayed
   */
  @Input()
  totalData?: number | null;

  /*
   * how many data should be displayed in one page
   */
  @Input()
  paginationLength!: number;

  @Input() set currentPage(page: number | string) {
    this.localCurrentPage = Number(page);
  }
  localCurrentPage: number = 0;

  renderingBubbles!: number;
  renderingBubblesHelper: number[] = [];

  get previousSliceIndex(): number {
    return this.localCurrentPage === 0
      ? 0
      : this.localCurrentPage === 1
      ? this.localCurrentPage - 1
      : this.localCurrentPage - 2;
  }

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['totalData']?.currentValue) {
      const total = this.totalData ?? 0;
      this.renderingBubbles = Math.ceil(total / this.paginationLength);
      this.renderingBubblesHelper = Array.from(Array(this.renderingBubbles).keys());
    }
  }

  ngOnInit(): void {}

  onPageChange(index: number): void {
    this.changePageEmitter.emit(index);
    this.localCurrentPage = index;
  }
}
