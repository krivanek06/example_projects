import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
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
import { RendererBasicsComponent } from './example_3/renderer-basics/renderer-basics.component';
import { HighlightDirective } from './example_3/renderer-basics/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ExampleNgTemplateComponent,
    ExampleDynamicComponentsComponent,
    PluginOneComponent,
    PluginTwoComponent,
    ExampleRendererComponent,
    RendererBasicsComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    FormsModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
