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
    type;
    sellRent;
    Block;
    Address;
    Locality;
    bhkType;
    Floor;
    Area;
    Price;
    OwnerName;
    contactNumber;
    FHLH;
    PartnerName;
    Delete;


  token = '';
  rooturl = 'http://localhost:8080';
  url = '';
  DATA = {};
  isAuthenticated = false;

  response = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  propertyResponse: any = []

  constructor(private cookieService: CookieService, private router: Router, private http: HttpClient) {
  }

  async ngOnInit() {
    // Get token from the cookie
    this.token = this.cookieService.get('Token');
    // If cookie doesnt exist, that means the user has never logged in, so login bitch
    if (!this.token) {
      this.router.navigate(['/login']);
    }

    const headers = new HttpHeaders().set('authentication', `Bearer' ${this.token}`);

    const requestMethod = async () => {
      // Check if the token has expired or not
      return this.http.post(this.rooturl + '/validatetoken', this.DATA, { headers }).subscribe(isValidated => {
        // isValidated is true if the token is verified
        if (isValidated !== true) {
          this.router.navigate(['/login']);
        } else {
          console.log('Token was validated before entering into tables');
          // if isAuthenticated is true, only then load html
          this.isAuthenticated = true;
          this.showDataInTables();
        }
      });
    };
    await requestMethod();
  }

  getProperties = async () => {
    this.token = this.cookieService.get('Token');
    const headers = new HttpHeaders().set('authentication', `Bearer' ${this.token}`);
    let props: any;
    // Fetching properties from backend
    const result = this.http.get(this.rooturl + '/properties', { headers }).subscribe(properties => {
      props = properties;
      console.log(props.data.propertydata);
      this.propertyResponse = props.data.propertydata;
      return props.data;
    });
    console.log('Trying to get properties');
    console.log(result);
    return result;
  }
  showDataInTables = async () => {
    if (this.isAuthenticated === true) {
      const property = await this.getProperties();
      console.log(`Inside show data in tables : ${property}`);
    }
  }

}
