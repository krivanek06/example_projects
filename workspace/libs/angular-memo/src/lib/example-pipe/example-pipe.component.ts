import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Observable, scan } from 'rxjs';
import { ApiService } from '../api.service';
import { SearchAnimeComponent } from '../shared/components/search-anime/search-anime.component';
import { TableHeaderComponent } from '../shared/components/table-header/table-header.component';
import { AnimeData, hardMathEquasion } from '../shared/models/data.model';
import { HardMathEquasionMemoPipe } from './hard-math-equasion-memo.pipe';
import { HardMathEquasionPipe } from './hard-math-equasion.pipe';
import { PurePipe } from './pure.pipe';

@Component({
  selector: 'app-example-pipe',
  templateUrl: './example-pipe.component.html',
  styleUrls: ['./example-pipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    TableHeaderComponent,
    SearchAnimeComponent,
    ReactiveFormsModule,
    MatButtonModule,
    PurePipe,
    HardMathEquasionMemoPipe,
    HardMathEquasionPipe,
  ],
})
export class ExamplePipeComponent implements OnInit {
  animeSearchControl: FormControl<AnimeData> = new FormControl<AnimeData>({} as AnimeData, { nonNullable: true });
  loadedAnime$!: Observable<AnimeData[]>;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadedAnime$ = this.animeSearchControl.valueChanges.pipe(
      scan((acc, curr) => [...acc, curr], [] as AnimeData[])
    );
  }

  onClick(): void {}

  hardMathEquasionFunctionCallPipe(anime: AnimeData): number {
    console.log(`%c Function call ${anime.title}`, `color: #FEA42C`);
    return hardMathEquasion(anime.score);
  }

  hardMathEquasionAsyncFunctionCallPipe(anime: AnimeData): Observable<number> {
    console.log(`%c [Async] Function call ${anime.title}`, `color: #22A42C`);
    return this.apiService.hardMathEquasionAsync(anime);
  }
}
