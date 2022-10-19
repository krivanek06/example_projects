// resource: https://itnext.io/its-ok-to-use-function-calls-in-angular-templates-ffdd12b0789e

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
