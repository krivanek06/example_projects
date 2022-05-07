import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiComponentsModule } from '@ct-test/ui-components';
import { AllUserComponent } from './all-user/all-user.component';

@NgModule({
  imports: [CommonModule, UiComponentsModule],
  declarations: [AllUserComponent],
  exports: [AllUserComponent],
})
export class UsersModule {}
