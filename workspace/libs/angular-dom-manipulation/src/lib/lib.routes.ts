import { Route } from '@angular/router';
import { AngularDomManipulationComponent } from './pages/angular-dom-manipulation/angular-dom-manipulation.component';
import { ExampleNgTemplateComponent } from './pages/example_1/example-ng-template.component';
import { ExampleDynamicComponentsComponent } from './pages/example_2/example-dynamic-components.component';
import { ExampleRendererComponent } from './pages/example_3/example-renderer.component';
import { ExamplePaginationComponent } from './pages/example_4/example-pagination.component';
import { ExampleSanitizerComponent } from './pages/example_5/example-sanitizer.component';

export const routes: Route[] = [
  {
    path: '',
    component: AngularDomManipulationComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'example-1',
      },
      {
        path: 'example-1',
        component: ExampleNgTemplateComponent,
      },
      {
        path: 'example-2',
        component: ExampleDynamicComponentsComponent,
      },
      {
        path: 'example-3',
        component: ExampleRendererComponent,
      },
      {
        path: 'example-4',
        component: ExamplePaginationComponent,
      },
      {
        path: 'example-5',
        component: ExampleSanitizerComponent,
      },
    ],
  },
];
