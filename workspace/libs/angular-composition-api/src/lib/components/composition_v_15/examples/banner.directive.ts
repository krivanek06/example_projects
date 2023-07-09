import { Directive, ElementRef, Host, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appBannerDefault]',
	standalone: true,
})
export class BannerDefaultDirective implements OnInit {
	@Input() bannerText: string = '';
	@Input() bannerType: 'success' | 'error' | 'default' = 'default';

	constructor(private elRef: ElementRef, private renderer: Renderer2) {}

	ngOnInit() {
		this.renderBanner();
	}

	private renderBanner(): void {
		const element = this.elRef.nativeElement;
		const matIcon = this.renderer.createElement('mat-icon');
		const matIconText = this.renderer.createText(this.getIcon());
		const bannerText = this.renderer.createText(this.bannerText);

		// classes for banner
		this.renderer.addClass(element, 'g-banner');
		this.renderer.addClass(element, this.getColor());

		// classes for mat-icon
		this.renderer.addClass(matIcon, 'mat-icon');
		this.renderer.addClass(matIcon, 'material-icons');

		// render
		this.renderer.appendChild(matIcon, matIconText);

		this.renderer.appendChild(element, matIcon);
		this.renderer.appendChild(element, bannerText);
	}

	private getColor(): string {
		if (this.bannerType === 'success') {
			return 'g-banner-success';
		}
		if (this.bannerType === 'error') {
			return 'g-banner-error';
		}
		return 'g-banner-default';
	}

	private getIcon(): string {
		if (this.bannerType === 'success') {
			return 'trending_ups';
		}
		if (this.bannerType === 'error') {
			return 'trending_down';
		}
		return 'close';
	}
}

@Directive({
	selector: '[appBannerSuccess]',
	standalone: true,
	hostDirectives: [
		{
			directive: BannerDefaultDirective,
			inputs: ['bannerText'],
		},
	],
})
export class BannerSuccessDirective {
	constructor(@Host() private bannerDefaultDirective: BannerDefaultDirective) {
		this.bannerDefaultDirective.bannerType = 'success';
	}
}

@Directive({
	selector: '[appBannerError]',
	standalone: true,
	hostDirectives: [
		{
			directive: BannerDefaultDirective,
			inputs: ['bannerText'],
		},
	],
})
export class BannerErrorDirective {
	constructor(@Host() private bannerDefaultDirective: BannerDefaultDirective) {
		this.bannerDefaultDirective.bannerType = 'error';
	}
}
