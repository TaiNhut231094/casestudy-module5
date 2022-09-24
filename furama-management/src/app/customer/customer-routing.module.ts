import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './list/list.component';
import {CreateComponent} from './create/create.component';
import {EditComponent} from './edit/edit.component';




const routes: Routes = [
  {
    path: 'customer/list',
    component: ListComponent
  },
  {
    path: 'customer/create',
    component: CreateComponent
  },
  {
    path: 'customer/edit',
    component: EditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
