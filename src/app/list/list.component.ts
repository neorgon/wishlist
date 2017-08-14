import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit, OnDestroy {

  public items;
  private listSubscription: Subscription;

  constructor( private listService: ListService) { 
  } 

  ngOnInit() {
    this.listSubscription = this.listService.getListItems('barbeque').
    subscribe((res)=>{
      this.items = res;
    })
  }

  ngOnDestroy() {
    if(this.listSubscription){
      this.listSubscription.unsubscribe();
    }
  }
}
