import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CompositionOldModule } from '../../components/composition-old/composition-old.module';
import { CompositionNewComponent } from '../../components/composition_v_15/composition-new.component';

@Component({
  selector: 'app-angular-composition-api-page',
  standalone: true,
  imports: [
    CommonModule,
    CompositionOldModule,
    CompositionNewComponent,
    DragDropModule,
    MatTooltipModule,
    MatDividerModule,
  ],
  templateUrl: './angular-composition-api-page.component.html',
  styleUrls: ['./angular-composition-api-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AngularCompositionApiPageComponent {}
