import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsExampleComponent } from '../../components/reactive-forms-example/reactive-forms-example.component';
import { TemplateDrivenFormsExampleComponent } from '../../components/template-driven-forms-example/template-driven-forms-example.component';

@Component({
  selector: 'workspace-basic-form-function',
  standalone: true,
  imports: [CommonModule, MatDividerModule, TemplateDrivenFormsExampleComponent, ReactiveFormsExampleComponent],
  templateUrl: './basic-form-function.component.html',
  styleUrls: ['./basic-form-function.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicFormFunctionComponent {}
