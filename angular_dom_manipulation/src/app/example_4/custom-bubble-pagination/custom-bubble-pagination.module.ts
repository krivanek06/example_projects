import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CustomBubblePaginationComponent } from './custom-bubble-pagination.component';
import { StylePaginatorDirective } from './StylePaginatorDirective.directive';

@NgModule({
	declarations: [CustomBubblePaginationComponent, StylePaginatorDirective],
	imports: [CommonModule, MatIconModule],
	exports: [CustomBubblePaginationComponent, StylePaginatorDirective],
})
export class CustomBubblePaginationModule {}
