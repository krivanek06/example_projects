import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Button1Component } from './button1.component';

@NgModule({
  declarations: [Button1Component],
  imports: [CommonModule],
  exports: [Button1Component],
})
export class Button1Module {}
