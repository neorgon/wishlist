import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { List } from './list-view/list.model';
import { environment } from '../../environments/environment';

@Injectable()

export class ListService {
  constructor( private http: HttpClient ) {
  }
  getLists(userName ): Observable<List[]> {

    return this.http.get<ListWrapper>(`${environment.backendPath}lists/`).map(
      (wrapper: ListWrapper) => {
          return wrapper.data;
      },
      (error) => {

      }
    );
  }
}

interface ListWrapper {
  data: List[];
}
