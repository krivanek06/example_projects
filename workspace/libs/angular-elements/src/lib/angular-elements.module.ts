import { CommonModule } from '@angular/common';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VotingOldComponent } from './voting-old/voting-old.component';
import { VotingOldModule } from './voting-old/voting-old.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule, VotingOldModule],
  providers: [],
})
export class AngularElementsModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const votingOld = createCustomElement(VotingOldComponent, { injector: this.injector });
    customElements.define('voting-old', votingOld);
  }
}
