import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleNgTemplateComponent } from './example_1/example-ng-template.component';
import { ExampleDynamicComponentsComponent } from './example_2/example-dynamic-components.component';
import { ExampleRendererComponent } from './example_3/example-renderer.component';
import { ExamplePaginationComponent } from './example_4/example-pagination.component';
import { ExampleSanitizerComponent } from './example_5/example-sanitizer.component';

export const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
