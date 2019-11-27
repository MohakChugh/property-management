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
  locality = 'Select Locality';
  description = '';
  ownerName = '';
  ownerNumber = '';
  partnerName = 'None';
  // locality = 'Select Locality';

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

  fhLhInsert(fhLh) {
    this.fhLh = fhLh;
  }

  localityInsert(locality) {
    this.locality = locality;
  }

  addproperty(propertyCategory,
              sellRent,
              block,
              bhk,
              floor,
              furnishedUnfurnished,
              area,
              price,
              PropertyType,
              address,
              fhLh,
              unitNumber,
              locality,
              description,
              ownerName,
              ownerNumber,
              partnerName) {
    this.propertyCategory = propertyCategory;
    this.sellRent = sellRent;
    this.block = block;
    this.bhk = bhk;
    this.floor = floor;
    this.furnishedUnfurnished = furnishedUnfurnished;
    this.area = area;
    this.price = price;
    this.PropertyType = PropertyType;
    this.address = address;
    this.fhLh = fhLh;
    this.unitNumber = unitNumber;
    this.locality = locality;
    this.description = description;
    this.ownerName = ownerName;
    this.ownerNumber = ownerNumber;
    this.partnerName = partnerName;
    const headers = new HttpHeaders().set('authentication', `Bearer' ${this.token}`);
    this.DATA = {
      
    };
    const result = await this.sendData(headers);
  }

  sendData = async (headers) => {
    return await this.http.post(this.rooturl + '/addclient', this.DATA, { headers }).subscribe(result => {
      console.log(result);
      this.requestSent = true;
      setTimeout(() => {
        this.requestSent = false;
      }, 3000);
      // let alert = Alert;
      // alert.getText('Client Saved');
    });
  }
}

