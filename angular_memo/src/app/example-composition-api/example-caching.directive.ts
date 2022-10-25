import { Directive, Input, OnChanges, OnDestroy, Renderer2, SimpleChanges } from '@angular/core';
import { BehaviorSubject, catchError, first, map, Observable, tap, throwError } from 'rxjs';
import { ApiService } from '../api.service';
import { AnimeData } from '../data.model';

@Directive({
	standalone: true,
})
export class CachingDirective<T> implements OnDestroy {
	private cache$: BehaviorSubject<{ [key: string]: T }> = new BehaviorSubject<{ [key: string]: T }>({});

	get values(): { [key: string]: T } {
		return this.cache$.value;
	}

	// check if key exists
	isValueInCache(key: string): boolean {
		return key in this.values;
	}

	getValueFromCache(key: string): T {
		return this.values[key];
	}

	getValueFromCacheObs(key: string, executableFuntion$?: Observable<T>): Observable<T> {
		return this.cache$.asObservable().pipe(
			map((data) => {
				if (key in data) {
					console.log(`[Caching Directive]: return data from cachce: ${key}`);
					return data[key];
				}
				throw new Error('Data not found');
			}),
			catchError((err) => {
				console.log('error:', err);
				if (executableFuntion$) {
					console.log('%c Execusting function', 'color: green');
					return executableFuntion$.pipe(
						first(),
						tap((res) => this.addValueIntoCache(key, res))
					);
				}

				return throwError(() => new Error(err));
			})
		);
	}

	addValueIntoCache(key: string, value: T): void {
		const previous = this.cache$.value;
		const newData = { [key]: value };

		this.cache$.next({ ...previous, ...newData });
	}

	ngOnDestroy(): void {
		// optional
		this.cache$.next({});
		this.cache$.complete(); // Todo does this work?
	}
}

@Directive({
	standalone: true,
	selector: 'marhProblem',
})
export class HardMathProblemDirective implements OnChanges {
	@Input() mathProblem?: AnimeData;

	constructor(private apiService: ApiService, private rederer: Renderer2) {}
	ngOnChanges(changes: SimpleChanges): void {
		if (changes?.['mathProblem']?.currentValue && this.mathProblem) {
			this.hardMathEquasionAsync(this.mathProblem)
				.pipe(first())
				.subscribe((value) => this.renderOnUI(value));
		}
	}

	hardMathEquasionAsync(anime: AnimeData): Observable<number> {
		return this.apiService.hardMathEquasionAsync(anime);
	}

	renderOnUI(value: number): void {
		// some logic to render on the UI
	}
}
