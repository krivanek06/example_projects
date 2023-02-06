import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CardWrapperComponent } from './card-wrapper/card-wrapper.component';
import { InArrayPipeModule } from './in-array/in-array-pipe.module';

@NgModule({
	declarations: [CardWrapperComponent],
	imports: [
		CommonModule,
		MatListModule,
		MatIconModule,
		MatButtonModule,
		FormsModule,
		ReactiveFormsModule,
		MatRippleModule,
		MatDividerModule,
		MatFormFieldModule,
		MatDialogModule,
		MatTooltipModule,
		MatInputModule,
		MatCardModule,
		MatBadgeModule,
		HttpClientModule,
		InArrayPipeModule,
	],
	exports: [
		CommonModule,
		MatListModule,
		MatIconModule,
		MatButtonModule,
		FormsModule,
		ReactiveFormsModule,
		MatRippleModule,
		MatDividerModule,
		MatFormFieldModule,
		MatDialogModule,
		MatTooltipModule,
		MatInputModule,
		MatCardModule,
		MatBadgeModule,
		HttpClientModule,
		CardWrapperComponent,
		InArrayPipeModule,
	],
})
export class SharedModule {}
