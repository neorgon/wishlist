import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ListService } from './../list.service';
import { List } from './list.model';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit, OnDestroy {

  @Input() userName: string;
  lists: List[];
  listSubscription: Subscription;
  constructor(private listService: ListService) {
  }

  ngOnInit() {
    this.listSubscription = this.listService.getLists(this.userName).subscribe(
      (nameLists: List[]) => {
        this.lists = nameLists;
      }
    );
  }
  ngOnDestroy() {
    if (this.listSubscription) {
      this.listSubscription.unsubscribe();
    }
  }
}
