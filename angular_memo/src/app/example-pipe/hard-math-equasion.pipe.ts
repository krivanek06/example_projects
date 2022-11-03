import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { AnimeData } from '../data.model';

@Pipe({
	name: 'hardMathEquasionPipe',
})
export class HardMathEquasionPipe implements PipeTransform {
	constructor(private apiService: ApiService) {}

	// using @customMemoize() dont do anything
	// @customMemoize() // <= NOT caching HTTP responses
	// @customMemoizeObs() // <= caching HTTP responses
	transform(anime: AnimeData): Observable<number> {
		console.log(`Pipe running for ${anime.title}`);
		return this.apiService.hardMathEquasionAsync(anime);
	}
}
