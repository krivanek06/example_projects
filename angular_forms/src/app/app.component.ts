import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

interface ExistingLinks {
	routerLink: string;
	name: string;
}
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	closeScreen$!: Observable<boolean>;
	isOpen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

	activeLink: string = '';

	links: ExistingLinks[] = [
		{ name: 'Control value accessor', routerLink: 'control-value-accessor' },
		{ name: 'Change detection', routerLink: 'change-detection' },
		{ name: 'Rxjs Mapping', routerLink: 'rxjs-mapping' },
		{ name: 'Advanced Forms', routerLink: 'advanced-forms' },
	];

	constructor(private breakpointObserver: BreakpointObserver) {}
	ngOnInit(): void {
		this.closeScreen$ = this.breakpointObserver.observe(['(max-width: 1280px)']).pipe(map((x) => x.matches));

		// need to show sidenav if view is large
		this.closeScreen$.subscribe((isMdDownScreen) => {
			if (!isMdDownScreen) {
				this.closeDrawerExpandedView();
			}
		});
	}

	saveRouterLink(link: string): void {
		this.activeLink = link;
	}

	toggleMatDrawerExpandedView(): void {
		this.isOpen$.next(!this.isOpen$.value);
	}

	closeDrawerExpandedView(): void {
		this.isOpen$.next(false);
	}
}
