import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared';
import { ChangeDetectionSquareComponent } from './change-detection-square/change-detection-square.component';
import { ChangeDetectionComponent } from './change-detection.component';
import { ChangeDetectionSquareOnpushComponent } from './change-detection-square-onpush/change-detection-square-onpush.component';


const routes: Routes = [
  {
    path: '',
    component: ChangeDetectionComponent
  }
];


@NgModule({
  declarations: [
    ChangeDetectionComponent,
    ChangeDetectionSquareComponent,
    ChangeDetectionSquareOnpushComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ChangeDetectionModule { }
