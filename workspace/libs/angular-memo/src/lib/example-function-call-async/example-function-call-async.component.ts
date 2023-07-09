import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Observable, scan } from 'rxjs';
import { ApiService } from '../api.service';
import { SearchAnimeComponent } from '../shared/components/search-anime/search-anime.component';
import { TableHeaderComponent } from '../shared/components/table-header/table-header.component';
import { AnimeData } from '../shared/models/data.model';

@Component({
  selector: 'app-example-function-call-async',
  templateUrl: './example-function-call-async.component.html',
  styleUrls: ['./example-function-call-async.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, TableHeaderComponent, SearchAnimeComponent, ReactiveFormsModule, MatButtonModule],
})
export class ExampleFunctionCallAsyncComponent implements OnInit {
  animeSearchControl: FormControl<AnimeData> = new FormControl<AnimeData>({} as AnimeData, { nonNullable: true });
  loadedAnime$!: Observable<AnimeData[]>;
  functionCallExecution = 0;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadedAnime$ = this.animeSearchControl.valueChanges.pipe(
      scan((acc, curr) => [...acc, curr], [] as AnimeData[])
    );
    // this.loadedAnime$.subscribe(console.log);
  }

  // @customMemoize()
  hardMathEquasionAsyncFunctionCall(anime: AnimeData): Observable<number> {
    console.log(`[Async] Function call ${anime.title}`);
    this.functionCallExecution += 1;
    return this.apiService.hardMathEquasionAsync(anime);
  }

  onClick(): void {}
}
