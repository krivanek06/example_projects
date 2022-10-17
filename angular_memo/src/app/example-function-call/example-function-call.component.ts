import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, scan } from 'rxjs';
import { AnimeData, hardMathEquasion } from '../data.model';

@Component({
	selector: 'app-example-function-call',
	templateUrl: './example-function-call.component.html',
	styleUrls: ['./example-function-call.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleFunctionCallComponent implements OnInit {
	animeSearchControl: FormControl<AnimeData> = new FormControl<AnimeData>({} as AnimeData, { nonNullable: true });
	loadedAnime$!: Observable<AnimeData[]>;
	functionCallExecution = 0;
	constructor() {}

	ngOnInit(): void {
		this.loadedAnime$ = this.animeSearchControl.valueChanges.pipe(scan((acc, curr) => [...acc, curr], [] as AnimeData[]));
		this.loadedAnime$.subscribe(console.log);
	}

	sortBy(key: 'name' | 'score' | 'custom'): void {
		// maybe once it will be sorting
	}

	hardMathEquasion(anime: AnimeData): number {
		console.log(`Function call ${anime.title}`);
		this.functionCallExecution += 1;
		return hardMathEquasion(anime.score);
	}

	onClick(): void {}
}
