import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ListService } from './../list.service';
import { List } from './list.model';
import { ListDetailComponent } from '../list-detail/list-detail.component';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css'],
  providers: [ ListService ]
})
export class ListViewComponent implements OnInit, OnDestroy {

  @Input() userName: string;
  lists: List[];
  selectedList: List;
  listSubscription: Subscription;
  constructor(private listService: ListService, private router: Router) {
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

  selectList(list: List) {
    this.selectedList = list;
    this.router.navigate(['/lists', this.selectedList.name]);
  }
}
