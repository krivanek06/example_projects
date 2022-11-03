import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, scan } from 'rxjs';
import { ApiService } from '../api.service';
import { AnimeData, hardMathEquasion } from '../data.model';

@Component({
	selector: 'app-example-pipe',
	templateUrl: './example-pipe.component.html',
	styleUrls: ['./example-pipe.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamplePipeComponent implements OnInit {
	animeSearchControl: FormControl<AnimeData> = new FormControl<AnimeData>({} as AnimeData, { nonNullable: true });
	loadedAnime$!: Observable<AnimeData[]>;
	constructor(private apiService: ApiService) {}

	ngOnInit(): void {
		this.loadedAnime$ = this.animeSearchControl.valueChanges.pipe(scan((acc, curr) => [...acc, curr], [] as AnimeData[]));
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
