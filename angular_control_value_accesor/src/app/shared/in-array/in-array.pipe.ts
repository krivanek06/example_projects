import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'inArray' })
export class InArrayPipe implements PipeTransform {
	transform<T>(
		values: T[] | null | undefined | any,
		needle: T | any,
		checkById = false
	): boolean {
		if (!values) {
			return false;
		}
		if (checkById) {
			return values.map((v: any) => v.id).includes(needle.id);
		}
		return values.includes(needle);
	}
}
