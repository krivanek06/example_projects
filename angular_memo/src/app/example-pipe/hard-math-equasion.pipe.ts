import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { AnimeData } from '../data.model';

@Pipe({
	name: 'hardMathEquasion',
})
export class HardMathEquasionPipe implements PipeTransform {
	constructor(private apiService: ApiService) {}

	// using @customMemoize() dont do anything
	// @customMemoize()
	transform(anime: AnimeData): Observable<number> {
		console.log(`Pipe running for ${anime.title}`);
		return this.apiService.hardMathEquasionAsync(anime);
	}
}
