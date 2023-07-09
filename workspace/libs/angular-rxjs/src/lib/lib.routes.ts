import { Route } from '@angular/router';
import { ConsoleLogExamplesComponent } from './pages/console-log-examples/console-log-examples.component';
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
      {
        path: 'console-logging',
        component: ConsoleLogExamplesComponent,
      },
    ],
  },
];
