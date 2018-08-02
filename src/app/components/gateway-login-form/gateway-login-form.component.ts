import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gateway-login-form',
  templateUrl: './gateway-login-form.component.html',
  styleUrls: ['./gateway-login-form.component.css']
})
export class GatewayLoginFormComponent implements OnInit {
  ip: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Gateway Login Form Submitted');
  }

}
