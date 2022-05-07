import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared';
import { RxjsMappingComponent } from './rxjs-mapping.component';


const routes: Routes = [
  {
    path: '',
    component: RxjsMappingComponent
  }
];

@NgModule({
  declarations: [RxjsMappingComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class RxjsMappingModule { }
