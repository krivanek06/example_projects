import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { AnimeData, AnimeDataAPI, hardMathEquasion } from './data.model';

@Injectable({
	providedIn: 'root',
})
export class ApiService {
	// api docs: https://docs.api.jikan.moe/#tag/anime/operation/getAnimeSearch
	readonly API = 'https://api.jikan.moe/v4/anime';
	readonly API_DUMMY = 'https://www.quandl.com/api/v3/databases';

	constructor(private http: HttpClient) {}

	/**
	 * search anime based on prefix
	 *
	 * @param prefix prefix of the anime we are searching
	 * @returns searched anime that has 'score' property
	 */
	searchAnime(prefix: string): Observable<AnimeData[]> {
		return this.http.get<AnimeDataAPI>(`${this.API}?q=${prefix}&limit=6`).pipe(map((res) => res.data.filter((d) => !!d.score)));
	}

	hardMathEquasionAsync(anime: AnimeData): Observable<number> {
		//console.log(`%c ApiService hard equasion executing for: ${anime.title} `, 'color: blue');

		return this.http.get<any>(this.API_DUMMY).pipe(
			map(() => {
				console.log(`%c [ApiService] API call: ${anime.title}`, 'color: red');
				return hardMathEquasion(anime.score);
			}),
			catchError(() => {
				console.log(`%c [ApiService] API call: ${anime.title}`, 'color: red');
				return of(hardMathEquasion(anime.score));
			})
		);
	}
}
