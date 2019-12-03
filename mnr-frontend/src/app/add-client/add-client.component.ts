import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  name = '';
  email = '';
  phoneNumber = '';
  type = '';
  address = '';
  occupation = '';
  additionalDetails = '';

  token = '';
  rooturl = 'https://mnr-backend.herokuapp.com';
  url = '';
  DATA = {};
  isAuthenticated = false;
  headers: HttpHeaders;
  requestSent: boolean;

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

  async getdata(name, email, phoneNumber, type, address, occupation, AdditionalDetails) {
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.type = type;
    this.address = address;
    this.occupation = occupation;
    this.additionalDetails = AdditionalDetails;
    console.log(this.name);
    console.log(this.email);
    console.log(this.phoneNumber);
    console.log(this.address);
    console.log(this.occupation);
    console.log(this.additionalDetails);
    const headers = new HttpHeaders().set('authentication', `Bearer' ${this.token}`);
    this.DATA = {
      name: this.name,
      email: this.email,
      phone: this.phoneNumber,
      type: this.type,
      address: this.address,
      occupation: this.occupation,
      additional_details: this.additionalDetails
    };
    const result = await this.sendData(headers);
    console.log(result);
    if (result) {
      console.log('alert called!');
      // alert('Client Saved')!
    }
  }

}
