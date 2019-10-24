import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email = '';
  password = '';
  passwordrepeat = '';

  constructor() { }

  ngOnInit() {
  }

  resetGetData(email, password, passwordrepeat) {
    this.email = email;
    this.password = password;
    this.passwordrepeat = passwordrepeat;
    console.log(email);
    console.log(password);
    console.log(passwordrepeat);
  }

}
