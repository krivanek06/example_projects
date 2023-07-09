import { CommonModule } from '@angular/common';
import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Observable, scan, tap } from 'rxjs';
import { SearchAnimeComponent } from '../shared/components/search-anime/search-anime.component';
import { TableHeaderComponent } from '../shared/components/table-header/table-header.component';
import { AnimeData, hardMathEquasion } from '../shared/models/data.model';

@Component({
  selector: 'app-example-function-call',
  templateUrl: './example-function-call.component.html',
  styleUrls: ['./example-function-call.component.scss'],
  standalone: true,
  imports: [CommonModule, TableHeaderComponent, SearchAnimeComponent, ReactiveFormsModule, MatButtonModule],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleFunctionCallComponent implements OnInit, DoCheck {
  @Input() title!: string;

  animeSearchControl: FormControl<AnimeData> = new FormControl<AnimeData>({} as AnimeData, { nonNullable: true });
  loadedAnime$!: Observable<AnimeData[]>;
  functionCallExecution = 0;
  color = this.getRandomColor();
  constructor() {}
  ngDoCheck(): void {
    // console.log(`%c ${this.title} ngDoCheck`, `color: ${this.color}`);
  }

  ngOnInit(): void {
    this.loadedAnime$ = this.animeSearchControl.valueChanges.pipe(
      tap(console.log),
      scan((acc, curr) => [...acc, curr], [] as AnimeData[])
    );
  }

  hardMathEquasionFunctionCall(anime: AnimeData): number {
    console.log(`%c Function call ${anime.title}, times ${this.functionCallExecution}`, `color: ${this.color}`);
    this.functionCallExecution += 1;
    return hardMathEquasion(anime.score);
  }

  onClick(): void {
    // const zero = this.peformance(100);
    // console.log(`Performance test: 100 took ${zero} milliseconds`);
    // const first = this.peformance(1000);
    // console.log(`Performance test: 1 000 took ${first} milliseconds`);
    // const second = this.peformance(10000);
    // console.log(`Performance test: 10 000 took ${second} milliseconds`);
    // const third = this.peformance(100000);
    // console.log(`Performance test: 100 000 took ${third} milliseconds`);
    // const fourth = this.peformance(500000);
    // console.log(`Performance test: 500 000 took ${fourth} milliseconds`);
  }

  private peformance(time: number): number {
    const startTime = performance.now();
    for (let i = 0; i < time; i++) {
      // perform evaluation
      const evaluation = hardMathEquasion(i);
    }
    const endTime = performance.now();

    const result = Math.round(endTime - startTime);
    return result;
  }

  private getRandomColor(): string {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
