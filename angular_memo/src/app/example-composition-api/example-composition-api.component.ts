import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, scan, tap } from 'rxjs';
import { ApiService } from '../api.service';
import { AnimeData } from '../data.model';
import { CachingDirective, HardMathProblemDirective } from './example-caching.directive';

@Component({
	selector: 'app-example-composition-api',
	templateUrl: './example-composition-api.component.html',
	styleUrls: ['./example-composition-api.component.scss'],
	hostDirectives: [CachingDirective, HardMathProblemDirective],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleCompositionApiComponent implements OnInit {
	cachingDirective = inject(CachingDirective);
	hardMathProblemDirective = inject(HardMathProblemDirective);

	animeSearchControl: FormControl<AnimeData> = new FormControl<AnimeData>({} as AnimeData, { nonNullable: true });
	loadedAnime$!: Observable<AnimeData[]>;
	functionCallExecution = 0;

	constructor(private apiService: ApiService) {}

	ngOnInit(): void {
		this.loadedAnime$ = this.animeSearchControl.valueChanges.pipe(scan((acc, curr) => [...acc, curr], [] as AnimeData[]));
	}

	// @customMemoize()
	hardMathEquasionAsyncFunctionCall(anime: AnimeData): Observable<number> {
		console.log(`[Composition API Component] executing: ${anime.title}`);
		this.functionCallExecution += 1;

		return this.cachingDirective.getValueFromCacheObs(anime.title, this.hardMathProblemDirective.hardMathEquasionAsync(anime));
	}

	hardMathEquasionAsyncFunctionCall2(anime: AnimeData): Observable<number> {
		this.functionCallExecution += 1;

		if (this.cachingDirective.isValueInCache(anime.title)) {
			console.log(`[Composition2 API Component] read from cache: ${anime.title}`);
			return this.cachingDirective.getValueFromCacheObs(anime.title);
		}

		console.log(`[Composition2 API Component] API call: ${anime.title}`);
		return this.apiService
			.hardMathEquasionAsync(anime)
			.pipe(tap((value) => this.cachingDirective.addValueIntoCache(anime.title, value)));
	}
}
