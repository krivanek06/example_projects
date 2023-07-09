import { Route } from '@angular/router';
import { MainRoutesComponent } from './main-routes/main-routes.component';
import { CUSTOM_ROUTES } from './models/routing.model';

export const appRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'main-routes',
      },
      {
        path: 'main-routes',
        component: MainRoutesComponent,
      },
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
      {
        path: CUSTOM_ROUTES.angularInjectionToken.path,
        loadChildren: () => import('@workspace/angular-injection-token').then((m) => m.routes),
      },
      {
        path: CUSTOM_ROUTES.angularMemo.path,
        loadChildren: () => import('@workspace/angular-memo').then((m) => m.routes),
      },
      {
        path: CUSTOM_ROUTES.angularNgrxForms.path,
        loadChildren: () => import('@workspace/angular-ngrx-forms').then((m) => m.routes),
      },
    ],
  },
];
