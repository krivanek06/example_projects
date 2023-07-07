import { Route } from '@angular/router';
import { RxjsHigherOrderMappingComponent } from './pages/rxjs-higher-order-mapping/rxjs-higher-order-mapping.component';

export const routes: Route[] = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'rxjs-higher-order-mapping',
        pathMatch: 'full',
      },
      {
        path: 'rxjs-higher-order-mapping',
        component: RxjsHigherOrderMappingComponent,
      },
    ],
  },
];
