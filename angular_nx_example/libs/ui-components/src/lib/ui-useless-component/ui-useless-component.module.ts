import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiUselessComponentComponent } from './ui-useless-component.component';

@NgModule({
  declarations: [UiUselessComponentComponent],
  imports: [CommonModule],
  exports: [UiUselessComponentComponent],
})
export class UiUselessComponentModule {}
