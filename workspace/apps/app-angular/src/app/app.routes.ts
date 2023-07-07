import { Route } from '@angular/router';
import { CUSTOM_ROUTES } from './models/routing.model';

export const appRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        path: CUSTOM_ROUTES.angularCompositionApi.path,
        loadChildren: () => import('@workspace/angular-composition-api').then((m) => m.routes),
      },
      {
        path: CUSTOM_ROUTES.angularDomManipulation.path,
        loadChildren: () => import('@workspace/angular-dom-manipulation').then((m) => m.routes),
      },
      {
        path: CUSTOM_ROUTES.angularRxjs.path,
        loadChildren: () => import('@workspace/angular-rxjs').then((m) => m.routes),
      },
      {
        path: CUSTOM_ROUTES.angularForms.path,
        loadChildren: () => import('@workspace/angular-forms').then((m) => m.routes),
      },
    ],
  },
];
