import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared.module';
import { CompositionOldComponent } from './composition-old.component';
import { ExampleButtonLoadingComponent } from './example-button-loading/example-button-loading.component';
import { ExampleButtonLoadingOldDirective } from './example-button-loading/example-button-loading.directive';

@NgModule({
  declarations: [
    ExampleButtonLoadingOldDirective,
    CompositionOldComponent,
    ExampleButtonLoadingComponent,
  ],
  imports: [CommonModule, MaterialModule, SharedModule],
  exports: [
    ExampleButtonLoadingOldDirective,
    CompositionOldComponent,
    ExampleButtonLoadingComponent,
  ],
})
export class CompositionOldModule {}
