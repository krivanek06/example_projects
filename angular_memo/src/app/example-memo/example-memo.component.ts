import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, scan } from 'rxjs';
import { ApiService } from '../api.service';
import { AnimeData } from '../data.model';
import { memo } from './memo';

@Component({
	selector: 'app-example-memo',
	templateUrl: './example-memo.component.html',
	styleUrls: ['./example-memo.component.scss'],
})
export class ExampleMemoComponent implements OnInit {
	animeSearchControl: FormControl<AnimeData> = new FormControl<AnimeData>({} as AnimeData, { nonNullable: true });
	loadedAnime$!: Observable<AnimeData[]>;
	constructor(private apiService: ApiService) {}

	hardMathEquasion = memo((animeData: AnimeData) => this.apiService.hardMathEquasionAsync(animeData));

	ngOnInit(): void {
		this.loadedAnime$ = this.animeSearchControl.valueChanges.pipe(scan((acc, curr) => [...acc, curr], [] as AnimeData[]));
	}

	sortBy(key: 'name' | 'score' | 'custom'): void {
		// maybe once it will be sorting
	}

	onClick(): void {}
}
