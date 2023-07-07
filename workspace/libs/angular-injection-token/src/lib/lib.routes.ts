import { Route } from '@angular/router';
import { ExampleInjectComponent } from './example-inject/example-inject.component';
import { ExampleWidgetComponent } from './example_widget/example-widget.component';
import { MainComponent } from './main/main.component';

export const routes: Route[] = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'example-widget',
      },
      {
        path: 'example-widget',
        component: ExampleWidgetComponent,
      },
      {
        path: 'example-inject',
        component: ExampleInjectComponent,
      },
    ],
  },
];
