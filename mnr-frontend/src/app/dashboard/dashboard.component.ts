import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  token = '';
  rooturl = 'https://mnr-backend.herokuapp.com';
  url = '';
  DATA = {};
  isAuthenticated = false;


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
        }
      });
    };

    requestMethod();
  }

}
