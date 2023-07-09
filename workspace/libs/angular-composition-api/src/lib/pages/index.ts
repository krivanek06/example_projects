import { Routes } from '@angular/router';
import { AngularCompositionApiPageComponent } from './angular-composition-api-page/angular-composition-api-page.component';
export * from './angular-composition-api-page/angular-composition-api-page.component';

export const routes: Routes = [
  {
    path: '',
    component: AngularCompositionApiPageComponent,
  },
];
