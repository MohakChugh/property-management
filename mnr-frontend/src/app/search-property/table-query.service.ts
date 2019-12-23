import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableQueryService {

  data = {};
  constructor() { }

  addData(obj: object) {
    this.data = obj;
  }

  getData() {
    return this.data;
  }
}
