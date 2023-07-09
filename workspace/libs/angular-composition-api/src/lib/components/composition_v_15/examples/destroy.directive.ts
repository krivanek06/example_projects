// Credits: https://twitter.com/_crisbeto/status/1582475442715385858

import { Directive, OnDestroy } from '@angular/core';
import { pipe, Subject, takeUntil } from 'rxjs';

@Directive({
	standalone: true,
})
export class DestroyDirective implements OnDestroy {
	private destroy$ = new Subject<void>();

	get pipe() {
		return pipe(takeUntil(this.destroy$));
	}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
