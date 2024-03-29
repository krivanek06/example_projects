import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective implements OnInit {
  @Input() value: unknown;
  marked = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(this.elRef.nativeElement, 'g-basic-highlight');
  }

  @HostListener('click')
  onClick() {
    if (this.marked) {
      this.renderer.removeClass(this.elRef.nativeElement, 'g-highlight');
    } else {
      this.renderer.addClass(this.elRef.nativeElement, 'g-highlight');
    }

    this.marked = !this.marked;
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.renderer.addClass(this.elRef.nativeElement, 'g-present-box');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.removeClass(this.elRef.nativeElement, 'g-present-box');
  }
}
