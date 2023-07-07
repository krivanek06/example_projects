import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { USER_FEATURE_KEY, UserEffects, UsersComponent, userReducerUsed } from './users';

export const routes: Route[] = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'users',
        component: UsersComponent,
        providers: [provideState(USER_FEATURE_KEY, userReducerUsed), provideEffects([UserEffects])],
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
    ],
  },
];
