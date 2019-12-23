import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  rooturl = 'https://mnr-backend.herokuapp.com';
  url = '';
  loading = false;
  error = false;
  constructor(
    private cookieService: CookieService,
    private router: Router,
    private http: HttpClient,
    ) { }

  ngOnInit() {
  }

  requestmethod(url: string, DATA: any) {
    return this.http.post(this.rooturl + url, DATA, {responseType: 'text'}).subscribe(token => {
      console.log(token);
      this.loading = false;
      if(this.loading === false){
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 5000);
      }
      if (token !== 'false') {
        const authenticated = JSON.stringify(token);
        this.cookieService.set('Token', authenticated);

        // To get the cookie back
        // this.cookieValue = this.cookieService.get('Token)
        this.router.navigate(['/dashboard']);
      }
    });
  }

  getemailpassword(email, password) {
    this.email = email;
    this.password = password;
    console.log(email);
    console.log(password);

    const DATA = {
      email : this.email,
      password : this.password
    };
    this.loading = true;
    const res = this.requestmethod('/login', DATA);
  }
}
