import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExampleMemoComponent } from './example-memo/example-memo.component';
import { ExamplePipeComponent } from './example-pipe/example-pipe.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ExampleFunctionCallAsyncComponent } from './example-function-call-async/example-function-call-async.component';
import { ExampleFunctionCallComponent } from './example-function-call/example-function-call.component';
import { HardMathEquasionMemoPipe } from './example-pipe/hard-math-equasion-memo.pipe';
import { HardMathEquasionPipe } from './example-pipe/hard-math-equasion.pipe';
import { MaterialModule } from './material.module';
import { SearchAnimeComponent } from './search-anime/search-anime.component';

@NgModule({
	declarations: [
		AppComponent,
		ExampleFunctionCallComponent,
		ExampleFunctionCallAsyncComponent,
		ExampleMemoComponent,
		ExamplePipeComponent,
		SearchAnimeComponent,
		HardMathEquasionPipe,
		HardMathEquasionMemoPipe,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		HttpClientModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
