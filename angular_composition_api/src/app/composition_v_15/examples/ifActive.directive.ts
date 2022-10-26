import { NgIf } from '@angular/common';
import { Directive, HostListener, inject, Injectable, OnInit, SkipSelf } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ActiveService {
	private active$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

	isActive(): Observable<boolean> {
		return this.active$.asObservable();
	}

	toggleActivation(): void {
		console.log('Toggling state');
		this.active$.next(!this.active$.value);
	}
}

@Directive({
	selector: '[ifActive]',
	standalone: true,
	hostDirectives: [
		{
			directive: NgIf,
		},
	],
})
export class ActiveDirective implements OnInit {
	private ngIfDirective = inject(NgIf);
	private activeService = inject(ActiveService);

	ngOnInit(): void {
		this.activeService.isActive().subscribe((state) => {
			this.ngIfDirective.ngIf = state;
		});
	}
}

@Directive({
	selector: '[toggleActive]',
	standalone: true,
})
export class ToggleActiveDirective {
	constructor(@SkipSelf() private activeService: ActiveService) {}

	@HostListener('click', ['$event'])
	onClick() {
		this.activeService.toggleActivation();
	}
}
