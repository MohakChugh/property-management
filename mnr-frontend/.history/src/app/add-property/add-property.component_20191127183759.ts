import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  token = '';
  rooturl = 'http://localhost:8080';
  url = '';
  DATA = {};
  isAuthenticated = false;

  isPropertyAdded = false;

  // Property Attributes
  propertyCategory = 'Choose Category';
  sellRent = 'Choose Sell or Rent';
  block = '';
  bhk = 'Select BHK type';
  floor = 'Select Floor';
  furnishedUnfurnished = '';
  area = '';
  price = '';
  PropertyType = '';
  address = '';
  fhLh = '';
  unitNumber = '';
  locality = '';
  description = '';
  ownerName = '';
  ownerNumber = '';
  partnerName = 'None';

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

  propertyCategoryInsert(propertyCategory) {
    this.propertyCategory = propertyCategory;
  }

  sellRentInsert(sellRent) {
    this.sellRent = sellRent;
  }

  bhkInsert(bhk) {
    this.bhk = bhk;
  }

  floorInsert(floor) {
    this.floor = floor;
  }

  furnishedUnfurnishedInsert(furnishedUnfurnished) {
    this.furnishedUnfurnished = furnishedUnfurnished;
  }
}
