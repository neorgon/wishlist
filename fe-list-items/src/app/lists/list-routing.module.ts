import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListDetailComponent } from './list-detail/list-detail.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'lists/:id',
        component: ListDetailComponent
      }
    ], { useHash: false })
  ],
  exports: [
    RouterModule
  ]
})
export class ListRoutingModule { }
