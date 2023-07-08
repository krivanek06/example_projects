import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { concatMap, delay, exhaustMap, fromEvent, mergeMap, of, startWith, switchMap, tap } from 'rxjs';

type HigherOrderTypes = 'switchMapField' | 'margeMapField' | 'concatMapField' | 'exhaustMapField';
@Component({
  selector: 'app-rxjs-higher-order-mapping',
  templateUrl: './rxjs-higher-order-mapping.component.html',
  styleUrls: ['./rxjs-higher-order-mapping.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class RxjsHigherOrderMappingComponent implements OnInit {
  higherOrderControl = new FormControl<HigherOrderTypes>('switchMapField', { nonNullable: true });

  @ViewChild('canvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;

  colors = {
    switchMapField: 'red',
    margeMapField: 'green',
    concatMapField: 'black',
    exhaustMapField: 'purple',
  };

  private ctx!: CanvasRenderingContext2D;

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d')!;

    this.higherOrderControl.valueChanges
      .pipe(
        startWith(this.higherOrderControl.value),
        switchMap((type) =>
          fromEvent(this.canvas.nativeElement, 'click').pipe(
            this.resolveOperatorByType(type)((e) =>
              of(1).pipe(
                delay(1500),
                tap(() => this.drawPoint(e as MouseEvent))
              )
            )
          )
        )
      )
      .subscribe();
  }

  onHigherOrderChange(type: HigherOrderTypes): void {
    this.higherOrderControl.setValue(type);
  }

  onCanvasClick(e: MouseEvent): void {
    const color = 'yellow';
    const positionX = e.offsetX;
    const positionY = e.offsetY;

    this.ctx.fillStyle = color;
    this.ctx.fillRect(positionX, positionY, 15, 15);

    setTimeout(() => {
      this.ctx.clearRect(positionX, positionY, 15, 15);
    }, 1500);
  }

  private resolveOperatorByType(type: HigherOrderTypes) {
    switch (type) {
      case 'switchMapField':
        return switchMap;
      case 'margeMapField':
        return mergeMap;
      case 'concatMapField':
        return concatMap;
      case 'exhaustMapField':
        return exhaustMap;
    }
  }

  private drawPoint(e: MouseEvent): void {
    const color = this.colors[this.higherOrderControl.value];
    const positionX = e.offsetX;
    const positionY = e.offsetY;

    this.ctx.fillStyle = color;
    this.ctx.fillRect(positionX, positionY, 15, 15);
  }
}
