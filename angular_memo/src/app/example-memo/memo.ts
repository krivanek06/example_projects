// resource: https://itnext.io/its-ok-to-use-function-calls-in-angular-templates-ffdd12b0789e

// Example 1.
export function memo<T extends Function>(fnToMemoize: T): T {
	let prevArgs = [{}];
	let result: any;

	return function (...newArgs: any[]) {
		if (hasDifferentArgs(prevArgs, newArgs)) {
			result = fnToMemoize(...newArgs);
			prevArgs = newArgs;
		}
		return result;
	} as any;
}

function hasDifferentArgs(prev: unknown[], next: unknown[]) {
	if (prev.length !== next.length) return true;
	for (let i = 0; i < prev.length; i++) {
		if (!Object.is(prev[i], next[i])) return true;
	}
	return false;
}
// ----------------------------------------------------------------

// Example 2.
export function customMemo(fn: any) {
	return function (...newArgs: any[]) {
		const args = Array.prototype.slice.call(newArgs) as any;
		fn.cache = fn.cache || {};
		return fn.cache[args] ? fn.cache[args] : (fn.cache[args] = fn.apply(this, args));
	};
}

// decorator @customMemoize()
export function customMemoize() {
	return function (target: any, key: any, descriptor: any) {
		const oldFunction = descriptor.value;
		const newFunction = customMemo(oldFunction);
		descriptor.value = function () {
			return newFunction.apply(this, arguments as any);
		};
	};
}
