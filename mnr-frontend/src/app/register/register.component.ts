import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email = '';
  password = '';
  repeatpassword =  '';
  firstname = '';
  lastname = '';
  name: string;
  constructor() { }

  ngOnInit() {
  }

  getdata(firstname, lastname, email, password, repeatpassword) {
    if(repeatpassword === password) {
      this.email = email;
      this.password = password;
      this.firstname = firstname;
      this.lastname = lastname;
      this.name = firstname + ' ' + lastname;
      console.log(this.name);
      console.log(password);
      console.log(email);
    } else {
      console.log('Password not equal to repeatpassword');
    }
  }

}
