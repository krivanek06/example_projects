import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Pipe({
	name: 'hardMathEquasion',
})
export class HardMathEquasionPipe implements PipeTransform {
	constructor(private apiService: ApiService) {}

	transform(animeTitle: string, score: number): Observable<number> {
		console.log(`Pipe running for ${animeTitle}`);
		return this.apiService.hardMathEquasionAsync(score);
	}
}
