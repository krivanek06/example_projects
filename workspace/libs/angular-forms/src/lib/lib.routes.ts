import { Route } from '@angular/router';
import { BasicFormFunctionComponent } from './pages/basic-form-function/basic-form-function.component';

export const routes: Route[] = [
  {
    path: '',
    redirectTo: 'basic-form-function',
    pathMatch: 'full',
  },
  {
    path: 'basic-form-function',
    component: BasicFormFunctionComponent,
  },
];
