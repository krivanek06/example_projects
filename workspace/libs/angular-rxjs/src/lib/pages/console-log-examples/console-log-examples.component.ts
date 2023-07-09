import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { delay, exhaustMap, interval, mergeAll, mergeMap, of, switchMap } from 'rxjs';

@Component({
  selector: 'workspace-console-log-examples',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './console-log-examples.component.html',
  styleUrls: ['./console-log-examples.component.scss'],
})
export class ConsoleLogExamplesComponent implements OnInit {
  ngOnInit(): void {
    // this.exampleOfMergeMap();
    // this.exampleOfExhaustMap();
  }

  private exampleOfExhaustMap(): void {
    const source$ = interval(500);

    /**
     * returns: 0 ... 7 ... 14 ... 21 ..
     */
    source$.pipe(exhaustMap((value) => of(value).pipe(delay(3000)))).subscribe(console.log);
  }

  private exampleOfMergeMap(): void {
    const source1$ = of([10, 20, 30]).pipe(delay(1000));
    const source2$ = of([100, 200, 300]).pipe(delay(2000));
    const source3$ = of([1000, 2000, 3000]).pipe(delay(3000));

    /**
     * returns:
     *  [10, 20, 30]
     *  [100, 200, 300]
     *  [1000, 2000, 3000]
     */
    of([source1$, source2$, source3$])
      .pipe(
        mergeAll(),
        mergeMap((sources) => sources)
      )
      .subscribe(console.log);

    /**
     * returns only:
     *   [1000, 2000, 3000]
     */
    of([source1$, source2$, source3$])
      .pipe(
        mergeAll(),
        switchMap((sources) => sources)
      )
      .subscribe(console.log);
  }
}
