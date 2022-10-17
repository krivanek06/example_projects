import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, scan } from 'rxjs';
import { AnimeData } from '../data.model';

@Component({
	selector: 'app-example-pipe',
	templateUrl: './example-pipe.component.html',
	styleUrls: ['./example-pipe.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamplePipeComponent implements OnInit {
	animeSearchControl: FormControl<AnimeData> = new FormControl<AnimeData>({} as AnimeData, { nonNullable: true });
	loadedAnime$!: Observable<AnimeData[]>;
	constructor() {}

	ngOnInit(): void {
		this.loadedAnime$ = this.animeSearchControl.valueChanges.pipe(scan((acc, curr) => [...acc, curr], [] as AnimeData[]));
	}

	sortBy(key: 'name' | 'score' | 'custom'): void {
		// maybe once it will be sorting
	}

	onClick(): void {}
}
