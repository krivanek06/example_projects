import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiComponentsModule } from '@ct-test/ui-components';
import { GroupDataComponent } from './group-data/group-data.component';

@NgModule({
  imports: [CommonModule, UiComponentsModule],
  declarations: [GroupDataComponent],
  exports: [GroupDataComponent],
})
export class GroupsModule {}
