import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-button-loading',
  template: `
    <button mat-raised-button [color]="color" class="button-loading" [disabled]="loading">
      <mat-spinner *ngIf="loading" [color]="color" [diameter]="20" mode="indeterminate"></mat-spinner>
      <ng-content></ng-content>
    </button>
  `,
  styles: ['mat-spinner {position: absolute; right: -25px}'],
})
export class ExampleButtonLoadingComponent {
  @Input() loading!: boolean;
  @Input() color!: ThemePalette;
}
