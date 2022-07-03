import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleNgTemplateComponent } from './example_1/example-ng-template.component';
import { ExampleDynamicComponentsComponent } from './example_2/example-dynamic-components.component';
import { PluginOneComponent } from './example_2/plugin-one/plugin-one.component';
import { PluginTwoComponent } from './example_2/plugin-two/plugin-two.component';
import { ExampleRendererComponent } from './example_3/example-renderer.component';
import { HighlightDirective } from './example_3/highlight.directive';
import { CustomBubblePaginationModule } from './example_4/custom-bubble-pagination';
import { ExamplePaginationComponent } from './example_4/example-pagination.component';
import { NewPaginationComponent } from './example_4/new-pagination/new-pagination.component';
import { OldPaginationComponent } from './example_4/old-pagination/old-pagination.component';
import { NgDompurifyPipe } from './example_5/dompurify.pipe';
import { ExampleSanitizerComponent } from './example_5/example-sanitizer.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleNgTemplateComponent,
    ExampleDynamicComponentsComponent,
    PluginOneComponent,
    PluginTwoComponent,
    ExampleRendererComponent,
    HighlightDirective,
    ExamplePaginationComponent,
    OldPaginationComponent,
    NewPaginationComponent,
    NgDompurifyPipe,
    ExampleSanitizerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomBubblePaginationModule,
    FormsModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
