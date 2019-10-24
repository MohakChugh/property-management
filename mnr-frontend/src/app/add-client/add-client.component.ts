import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

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
  rooturl = 'http://localhost:8080';
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

  getdata(name, email, phoneNumber, type, address, occupation, AdditionalDetails) {
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
  }

}
