import { Component, OnInit } from '@angular/core';
import { TableQueryService } from '../table-query.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-search-table',
  templateUrl: './search-table.component.html',
  styleUrls: ['./search-table.component.css']
})
export class SearchTableComponent implements OnInit {
  
  token = '';
  DATA = {};
  rooturl = 'https://mnr-backend.herokuapp.com';
  resultantData: any;
  constructor(
    private data: TableQueryService,
    private http: HttpClient,
    private cookieService: CookieService
    ) { }
  ngOnInit() {
    this.DATA = this.data.getData();
    this.token = this.cookieService.get('Token');
    console.log(this.token);
    const headers = new HttpHeaders().set('authentication', `Bearer' ${this.token}`);
    this.sendData(headers);
  }
  
  // headers = new HttpHeaders().set('authentication', `Bearer' ${this.token}`);
  
  sendData = async (headers: HttpHeaders) => {
    this.DATA = this.data.getData();
    return this.http.post(this.rooturl + '/searchproperties', this.DATA, {headers}).subscribe(value => {
      console.log('search values');
      console.log(value)
      this.resultantData = value;
    })
  }
  
  async getTableValues () {
    this.token = this.cookieService.get('Token');
    const headers = new HttpHeaders().set('authentication', `Bearer' ${this.token}`);
    const result = await this.sendData(headers);
    
  }
}
