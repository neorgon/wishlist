import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsComponent } from './lists.component';
import { ListsViewComponent } from './lists-view/lists-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ListsComponent,
    ListsViewComponent
  ],
  exports: [
    ListsComponent
  ]
})
export class ListsModule { }
