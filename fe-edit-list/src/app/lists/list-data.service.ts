import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

import { List } from './list-view/list.model';

@Injectable()

export class ListDataService {

  private listUpdatedSource = new Subject<List>();

  listUpdated$ = this.listUpdatedSource.asObservable();

  addCreatedList(list: List) {
    this.listUpdatedSource.next(list);
  }
}
