import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { GroupsComponent } from './groups.component';
import { GroupFormComponent } from './group-form/group-form.component';

const routes: Routes = [
  {
    path: '',
    component: GroupsComponent,
  },
];

@NgModule({
  declarations: [GroupsComponent, GroupFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class GroupsModule {}
