import { tap } from 'rxjs';
// resource: https://itnext.io/its-ok-to-use-function-calls-in-angular-templates-ffdd12b0789e

import { of } from 'rxjs';

export function memo<T extends Function>(f: T) {
	// Value cache stored in the closure
	const cacheLookup: { [key: string]: any } = {};

	return function (...newArgs: any[]) {
		// newArgs can be object -> stringify it
		const keyString = JSON.stringify(newArgs);

		// check if value in cache
		if (!cacheLookup[keyString]) {
			// cache result
			cacheLookup[keyString] = f.apply(this, newArgs);
		}

		return cacheLookup[keyString];
	};
}

// decorator @customMemoize()
export function customMemoize() {
	return function (target: any, key: any, descriptor: any) {
		const oldFunction = descriptor.value;
		const newFunction = memo(oldFunction);
		descriptor.value = function () {
			return newFunction.apply(this, arguments as any);
		};
	};
}

// ---------------------------------

export const customMemoizeObs = () => {
	// Value cache stored in the closure
	const cacheLookup: { [key: string]: any } = {};

	return (target: any, key: any, descriptor: any) => {
		const originalMethod = descriptor.value;

		descriptor.value = function () {
			// arguments can be object -> stringify it
			const keyString = JSON.stringify(arguments);

			// cached data
			if (keyString in cacheLookup) {
				console.log('reading from cache');
				return of(cacheLookup[keyString]);
			}

			// call the API with arguments
			return originalMethod.apply(this, arguments).pipe(
				//first(),
				tap((x) => {
					cacheLookup[keyString] = x;
				})
			);
		};

		return descriptor;
	};
};
