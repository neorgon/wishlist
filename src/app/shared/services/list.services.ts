import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { List } from '../models/list.models';

@Injectable()
export class ListServices {

  lists: List[];
  private host = 'http://localhost:3000/lists/';

  constructor(private http, HttpClient) {}

  getList(owner) {
    return this.http.get(`${this.host}${owner}`)
      .subscribe(data => { this.lists = data[] });
  }
}