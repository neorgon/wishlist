import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewlistComponent } from './newlist.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NewlistComponent],
  exports: [NewlistComponent]
})
export class NewlistModule { }
