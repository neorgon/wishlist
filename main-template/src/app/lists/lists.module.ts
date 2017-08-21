import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { ListViewComponent } from './list-view/list-view.component';
import { ListService } from './list.service';
import { ListsComponent } from './lists.component';
import { CreateListComponent } from './create-list/create-list.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { ItemsViewComponent } from './items-view/items-view.component';
 
@NgModule({
  imports: [
    CommonModule,
    NgbAccordionModule.forRoot(),
    TranslateModule
  ],
  declarations: [
    ListViewComponent, 
    ListsComponent,
    CreateListComponent,
    CreateItemComponent,
    ItemsViewComponent
    ],
  providers: [
    ListService
  ], 
  exports: [
    ListViewComponent,
    ListsComponent,
    CreateListComponent,
    CreateItemComponent,
    ItemsViewComponent
  ]

})
export class ListsModule { }
