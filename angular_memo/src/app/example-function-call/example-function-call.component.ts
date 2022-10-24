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

	hardMathEquasionFunctionCall(anime: AnimeData): number {
		console.log(`Function call ${anime.title}`);
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
}
