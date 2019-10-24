import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  type = 'Residential Builder';
  sellRent = 'Sell';
  Block = 'K-I/9';
  Address = 'K-I/9';
  Locality = 'CR Park';
  bhkType = '2 BHk';
  Floor = 'Second';
  Area = '125 Yards';
  Price = '1 Crore';
  OwnerName = 'Tripathi';
  contactNumber = '9810178257';
  FHLH = 'FH';
  PartnerName = 'Mr. Kumar';
  Delete = '';

  token = '';
  rooturl = 'http://localhost:8080';
  url = '';
  DATA = {};
  isAuthenticated = false;

  response = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
