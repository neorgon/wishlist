import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ListsComponent } from './lists.component';
import { ListViewComponent } from './list-view/list-view.component';
import { ListService } from './list.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [
    ListsComponent,
    ListViewComponent
  ],
  providers: [
    ListService
  ],
  exports: [
    ListsComponent,
    ListViewComponent
  ]

})

export class ListsModule {}
