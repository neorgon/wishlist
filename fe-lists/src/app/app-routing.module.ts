import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListsComponent } from './lists/lists.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'lists',
        component: ListsComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ], { useHash: false })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
