import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'workspace-angular-dom-manipulation',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, RouterModule, MatButtonModule],
  templateUrl: './angular-dom-manipulation.component.html',
  styleUrls: ['./angular-dom-manipulation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AngularDomManipulationComponent {}
