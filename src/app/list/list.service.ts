import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { List } from './list.model';

interface ListItemsModel{
  data: List[];
}

@Injectable()
export class ListService {
  private items;
  private route = "http://localhost:3000/lists/";
  constructor(private http: HttpClient) {
  }

  getListItems(idlist): Observable<List[]> {
    return this.http.get<ListItemsModel>(`${this.route}${idlist}/items`).map(
      (list: ListItemsModel) => {
        return list.data;
      },
      (error) => {console.log(error)}
    );
  }
}