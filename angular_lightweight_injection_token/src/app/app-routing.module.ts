import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleInjectComponent } from './example-inject/example-inject.component';
import { ExampleWidgetComponent } from './example_widget/example-widget.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'example-1',
    pathMatch: 'full',
  },
  {
    path: 'example-1',
    component: ExampleWidgetComponent,
  },
  {
    path: 'example-2',
    component: ExampleInjectComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
