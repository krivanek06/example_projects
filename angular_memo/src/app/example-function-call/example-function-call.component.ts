import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, scan, tap } from 'rxjs';
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
		this.loadedAnime$ = this.animeSearchControl.valueChanges.pipe(
			tap(console.log),
			scan((acc, curr) => [...acc, curr], [] as AnimeData[])
		);
	}

	hardMathEquasion(anime: AnimeData): number {
		console.log(`Function call ${anime.title}`);
		this.functionCallExecution += 1;
		return hardMathEquasion(anime.score);
	}

	onClick(): void {}
}
