import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Observable, scan } from 'rxjs';
import { ApiService } from '../api.service';
import { SearchAnimeComponent } from '../shared/components/search-anime/search-anime.component';
import { TableHeaderComponent } from '../shared/components/table-header/table-header.component';
import { AnimeData, hardMathEquasion } from '../shared/models/data.model';
import { customMemoize, customMemoizeObs } from './memo';

@Component({
  selector: 'app-example-memo',
  templateUrl: './example-memo.component.html',
  styleUrls: ['./example-memo.component.scss'],
  standalone: true,
  imports: [CommonModule, TableHeaderComponent, SearchAnimeComponent, ReactiveFormsModule, MatButtonModule],
})
export class ExampleMemoComponent implements OnInit {
  animeSearchControl: FormControl<AnimeData> = new FormControl<AnimeData>({} as AnimeData, { nonNullable: true });
  loadedAnime$!: Observable<AnimeData[]>;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadedAnime$ = this.animeSearchControl.valueChanges.pipe(
      scan((acc, curr) => [...acc, curr], [] as AnimeData[])
    );
  }

  onClick(): void {}

  // @customMemoize() // <= re-executes Observables
  @customMemoizeObs()
  functionAsync(animeData: AnimeData): Observable<number> {
    console.log('execution');
    return this.apiService.hardMathEquasionAsync(animeData);
  }

  @customMemoize()
  functionNormal(anime: AnimeData): number {
    console.log(`%c Function call ${anime.title}`, `color: #FEA42C`);
    return hardMathEquasion(anime.score);
  }
}
