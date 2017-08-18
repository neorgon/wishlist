import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ListViewComponent } from './list-view/list-view.component';
import { ListService } from './list.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [ListViewComponent],
  providers: [
    ListService
  ],
  exports: [
    ListViewComponent
  ]

})

export class ListsModule { }
