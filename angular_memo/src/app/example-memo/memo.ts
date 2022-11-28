import { tap } from 'rxjs';
// resource: https://itnext.io/its-ok-to-use-function-calls-in-angular-templates-ffdd12b0789e

import { of } from 'rxjs';

export function customMemoize() {
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
				return cacheLookup[keyString];
			}

			// call the function with arguments
			const calculation = originalMethod.apply(this, arguments);
			// save data to cache
			cacheLookup[keyString] = calculation;
			// return calculated data
			return calculation;
		};

		return descriptor;
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
