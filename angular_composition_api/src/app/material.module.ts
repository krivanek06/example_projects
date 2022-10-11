import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatDividerModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTooltipModule,
    MatInputModule,
    MatCardModule,
    MatBadgeModule,
  ],
  exports: [
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatDividerModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTooltipModule,
    MatInputModule,
    MatCardModule,
    MatBadgeModule,
  ],
})
export class MaterialModule {}
