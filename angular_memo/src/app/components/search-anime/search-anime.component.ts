import { ChangeDetectionStrategy, Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, Observable, switchMap } from 'rxjs';
import { ApiService } from '../../api.service';
import { AnimeData } from '../../data.model';

@Component({
	selector: 'app-search-anime',
	templateUrl: './search-anime.component.html',
	styleUrls: ['./search-anime.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => SearchAnimeComponent),
			multi: true,
		},
	],
})
export class SearchAnimeComponent implements OnInit, ControlValueAccessor {
	searchedData$!: Observable<AnimeData[]>;
	searchControl: FormControl<string> = new FormControl<string>('', { nonNullable: true });

	onChange: (dateRange?: AnimeData | null) => void = () => {};
	onTouched = () => {};

	constructor(private apiService: ApiService) {}

	ngOnInit(): void {
		this.searchedData$ = this.searchControl.valueChanges.pipe(
			filter((x) => x.length > 3),
			distinctUntilChanged(),
			debounceTime(300),
			switchMap((name) => this.apiService.searchAnime(name))
		);
	}

	animeDisplayWith(animeData: AnimeData): string {
		return animeData.title_english ?? animeData.title;
	}

	/**
	 * notify parent component that a value has been selected
	 */
	onSelectionChange(animeData: AnimeData, event: any): void {
		// ignore on deselection of the previous option
		if (event.isUserInput) {
			this.onChange(animeData);
			this.searchControl.patchValue('', { emitEvent: false });
		}
	}

	// unsed
	writeValue(_?: null): void {}

	/**
	 * Register Component's ControlValueAccessor onChange callback
	 */
	registerOnChange(fn: SearchAnimeComponent['onChange']): void {
		this.onChange = fn;
	}

	/**
	 * Register Component's ControlValueAccessor onTouched callback
	 */
	registerOnTouched(fn: SearchAnimeComponent['onTouched']): void {
		this.onTouched = fn;
	}
}
