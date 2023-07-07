import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { CompositionOldComponent } from './composition-old.component';
import { ExampleButtonClickComponent } from './example-button-click/example-button-click.component';
import { ExampleButtonClickDirective } from './example-button-click/example-button-click.directive';
import { ExampleButtonLoadingComponent } from './example-button-loading/example-button-loading.component';
import { ExampleButtonLoadingOldDirective } from './example-button-loading/example-button-loading.directive';

@NgModule({
  declarations: [
    ExampleButtonLoadingOldDirective,
    CompositionOldComponent,
    ExampleButtonLoadingComponent,
    ExampleButtonClickComponent,
    ExampleButtonClickDirective,
  ],
  imports: [CommonModule, MatRadioModule, MatDividerModule, FormsModule, MatProgressSpinnerModule, MatFormFieldModule],
  exports: [ExampleButtonLoadingOldDirective, CompositionOldComponent, ExampleButtonLoadingComponent],
})
export class CompositionOldModule {}
