import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  address = '13, rampuri';
  phone = '9810178257';
  email = 'me.mohakchugh@gmail.com';
  type = 'broker';
  name = 'mohak chugh';

  token = '';
  rooturl = 'http://localhost:8080';
  url = '';
  DATA = {};
  isAuthenticated = false;
  clientData: any;

  array = [1, 2, 3, 4, 5, 6, 7];
  headers = HttpHeaders;

  constructor(private cookieService: CookieService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    // Get token from the cookie
    this.token = this.cookieService.get('Token');
    // If cookie doesnt exist, that means the user has never logged in, so login bitch
    if (!this.token) {
      this.router.navigate(['/login']);
    }

    const headers = new HttpHeaders().set('authentication', `Bearer' ${this.token}`);

    const requestMethod = () => {
      // Check if the token has expired or not
      return this.http.post(this.rooturl + '/validatetoken', this.DATA, { headers }).subscribe(isValidated => {
        // isValidated is true if the token is verified
        if (isValidated !== true) {
          this.router.navigate(['/login']);
        } else {
          console.log('Token was validated before entering into dashboard');
          // if isAuthenticated is true, only then load html
          this.isAuthenticated = true;
          this.retrieveData();
        }
      });
    };

    requestMethod();
  }

  getClients = (headers) => {
    return this.http.get(this.rooturl + '/client', { headers }).subscribe(result => {
      console.log(result);
      this.clientData = result;
      this.clientData = this.clientData.data.clientData;
    });
  }

  retrieveData = () => {
    const headers = new HttpHeaders().set('authentication', `Bearer' ${this.token}`);
    this.getClients(headers);
  }
}
