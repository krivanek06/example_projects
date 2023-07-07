import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularCompositionApiPageComponent } from '@workspace/angular-composition-api';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, AngularCompositionApiPageComponent],
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app-angular';
}
