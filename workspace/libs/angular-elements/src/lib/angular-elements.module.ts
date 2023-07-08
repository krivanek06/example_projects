import { CommonModule } from '@angular/common';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { VotingOldComponent } from './voting-old/voting-old.component';
import { VotingOldModule } from './voting-old/voting-old.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, VotingOldModule],
  providers: [],
})
export class AngularElementsModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const votingOld = createCustomElement(VotingOldComponent, { injector: this.injector });
    customElements.define('voting-old', votingOld);
  }
}
