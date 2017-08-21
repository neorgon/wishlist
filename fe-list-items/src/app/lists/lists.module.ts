import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ListRoutingModule } from './list-routing.module';
import { ListsComponent } from './lists.component';
import { ListViewComponent } from './list-view/list-view.component';
import { ListService } from './list.service';
import { ListDetailComponent } from './list-detail/list-detail.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ListRoutingModule
  ],
  declarations: [
    ListsComponent,
    ListViewComponent,
    ListDetailComponent
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
