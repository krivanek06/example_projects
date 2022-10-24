import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { ApiService } from '../api.service';
import { AnimeData } from '../data.model';

/**
 * Pipes are not singletons, this is why we need to use static cachedAnimeDataCalculations,
 * so that one cachedAnimeDataCalculations instance is shared accros every pipes instance
 */
@Pipe({
	name: 'hardMathEquasionMemoPipe',
})
export class HardMathEquasionMemoPipe implements PipeTransform {
	private static cachedAnimeDataCalculations: { [id: string]: number } = {};

	constructor(private apiService: ApiService) {}

	transform(anime: AnimeData): Observable<number> {
		// return data from cache
		if (anime.title in HardMathEquasionMemoPipe.cachedAnimeDataCalculations) {
			console.log(`Pipe CACHE return ${anime.title}`);
			return of(HardMathEquasionMemoPipe.cachedAnimeDataCalculations[anime.title]);
		}

		// load data from API
		console.log(`Pipe running for ${anime.title}`);
		return this.apiService.hardMathEquasionAsync(anime).pipe(
			tap((res) => {
				HardMathEquasionMemoPipe.cachedAnimeDataCalculations[anime.title] = res;
				console.log(`Saving calculation ${HardMathEquasionMemoPipe.cachedAnimeDataCalculations} for ${anime.title}`);
			})
		);
	}
}
