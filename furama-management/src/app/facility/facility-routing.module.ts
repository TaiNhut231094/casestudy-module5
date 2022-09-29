import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './list/list.component';
import {CreateComponent} from './create/create.component';
import {EditComponent} from './edit/edit.component';

const routes: Routes = [
  {
    path: 'facility/list',
    component: ListComponent
  },
  {
    path: 'facility/create',
    component: CreateComponent
  },
  {
    path: 'facility/edit',
    component: EditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityRoutingModule { }
