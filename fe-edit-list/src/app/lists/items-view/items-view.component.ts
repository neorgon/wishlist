import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ListService } from './../list.service';
import { List } from '../list-view/list.model';

@Component({
  selector: 'app-items-view',
  templateUrl: './items-view.component.html',
  styleUrls: ['./items-view.component.css']
})

export class ItemsViewComponent implements OnInit, OnDestroy {

  public items;
  public error;
  public idList = '';
  private listSubscription: Subscription;

  constructor( private listService: ListService, private route: ActivatedRoute) {
    this.route.params.subscribe((param) => {
      this.idList = param['id'];
      this.getItemsForList(this.idList);
    });
  }

  ngOnInit() {
    this.route.params.subscribe((param) => { this.idList = param['id']; });
    this.getItemsForList(this.idList);
  }

  getItemsForList(idList) {
    this.listSubscription = this.listService.getListItems(idList).subscribe((listItems: List[]) => {
      this.items = listItems;
    },
    error => {
      this.error = error;
    });
  }

  ngOnDestroy() {
    if (this.listSubscription) {
      this.listSubscription.unsubscribe();
    }
  }
}
