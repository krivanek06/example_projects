import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { CUSTOM_ROUTES_ARRAY } from '../models/routing.model';

@Component({
  selector: 'app-main-routes',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterModule],
  templateUrl: './main-routes.component.html',
  styleUrls: ['./main-routes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainRoutesComponent {
  router = inject(Router);
  CUSTOM_ROUTES_ARRAY = CUSTOM_ROUTES_ARRAY;

  onRouterNavigation(data: { title: string; path: string }): void {
    this.router.navigate([data.path]);
  }
}
