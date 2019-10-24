import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  rooturl = 'http://localhost:8080';
  url = '';
  constructor(
    private cookieService: CookieService,
    private router: Router,
    private service: AuthService,
    private http: HttpClient,
    ) { }

  ngOnInit() {
  }

  requestmethod(url: string, DATA: any) {
    return this.http.post(this.rooturl + url, DATA, {responseType: 'text'}).subscribe(token => {
      console.log(token);
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
    const res = this.requestmethod('/login', DATA);
  }
}
