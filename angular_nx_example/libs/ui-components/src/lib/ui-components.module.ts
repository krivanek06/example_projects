import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { UiButtonComponent } from './ui-button/ui-button.component';
import { UiCardComponent } from './ui-card/ui-card.component';
import { UiItemComponent } from './ui-item/ui-item.component';
@NgModule({
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatDividerModule],
  declarations: [UiButtonComponent, UiItemComponent, UiCardComponent],
  exports: [UiButtonComponent, UiItemComponent, UiCardComponent],
})
export class UiComponentsModule {}
