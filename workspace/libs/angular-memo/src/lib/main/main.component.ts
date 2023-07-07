import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ExampleFunctionCallAsyncComponent } from '../example-function-call-async/example-function-call-async.component';
import { ExampleFunctionCallComponent } from '../example-function-call/example-function-call.component';
import { ExampleMemoComponent } from '../example-memo/example-memo.component';
import { ExamplePipeComponent } from '../example-pipe/example-pipe.component';

@Component({
  selector: 'workspace-main',
  standalone: true,
  imports: [
    CommonModule,
    ExampleFunctionCallComponent,
    ExampleFunctionCallAsyncComponent,
    ExampleMemoComponent,
    ExamplePipeComponent,
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
