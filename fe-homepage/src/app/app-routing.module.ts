import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomepageComponent
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
