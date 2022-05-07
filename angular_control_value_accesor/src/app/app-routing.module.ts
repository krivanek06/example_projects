import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: 'control-value-accessor',
    loadChildren: () => import('./control-value-accessor/control-value-accessor.module').then(m => m.ControlValueAccessorModule),
  },
  {
    path: 'change-detection',
    loadChildren: () => import('./change-detection/change-detection.module').then(m => m.ChangeDetectionModule)
  },
  {
    path: 'rxjs-mapping',
    loadChildren: () => import('./rxjs-mapping/rxjs-mapping.module').then(m => m.RxjsMappingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
