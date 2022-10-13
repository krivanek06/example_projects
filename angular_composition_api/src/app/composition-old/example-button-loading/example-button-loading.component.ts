import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-example-button-loading',
  templateUrl: './example-button-loading.component.html',
  styleUrls: ['./example-button-loading.component.scss'],
})
export class ExampleButtonLoadingComponent {
  @Input() loading!: boolean;
}
