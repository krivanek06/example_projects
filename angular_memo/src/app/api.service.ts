import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { AnimeData, AnimeDataAPI, hardMathEquasion } from './data.model';

@Injectable({
	providedIn: 'root',
})
export class ApiService {
	private readonly API = 'https://api.jikan.moe/v4/anime';
	private readonly API_DUMMY = 'https://www.quandl.com/api/v3/databases';
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

	hardMathEquasionAsync(animeScore: number): Observable<number> {
		return this.http.get<any>(this.API_DUMMY).pipe(
			map(() => hardMathEquasion(animeScore)),
			catchError(() => of(hardMathEquasion(animeScore)))
		);
	}
}
