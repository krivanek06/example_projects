import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, scan } from 'rxjs';
import { ApiService } from '../api.service';
import { AnimeData } from '../data.model';

@Component({
	selector: 'app-example-function-call-async',
	templateUrl: './example-function-call-async.component.html',
	styleUrls: ['./example-function-call-async.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleFunctionCallAsyncComponent implements OnInit {
	animeSearchControl: FormControl<AnimeData> = new FormControl<AnimeData>({} as AnimeData, { nonNullable: true });
	loadedAnime$!: Observable<AnimeData[]>;
	functionCallExecution = 0;
	constructor(private apiService: ApiService) {}

	ngOnInit(): void {
		this.loadedAnime$ = this.animeSearchControl.valueChanges.pipe(scan((acc, curr) => [...acc, curr], [] as AnimeData[]));
		this.loadedAnime$.subscribe(console.log);
	}

	sortBy(key: 'name' | 'score' | 'custom'): void {
		// maybe once it will be sorting
	}

	hardMathEquasion(anime: AnimeData): Observable<number> {
		console.log(`[Async] Function call ${anime.title}`);
		this.functionCallExecution += 1;
		return this.apiService.hardMathEquasionAsync(anime);
	}

	onClick(): void {}
}
