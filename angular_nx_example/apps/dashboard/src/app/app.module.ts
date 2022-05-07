import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { GroupsModule } from '@ct-test/groups';
import { UiComponentsModule } from '@ct-test/ui-components';
import { Button1Module } from '@ct-test/ui-components/buttons';
import { UsersModule } from '@ct-test/users';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    UiComponentsModule,
    UsersModule,
    MatDividerModule,
    GroupsModule,
    Button1Module,
    // UiUselessComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
