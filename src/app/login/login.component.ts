import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: any;
  error: any = '';
  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      login: '',
      password: '',
    });
  }

  ngOnInit(): void {}

  onSubmit(customerData: any) {
    localStorage.setItem('auth', 'false');
    this.loginForm.reset();
    if (customerData.login == 'Admin' && customerData.password == '12345') {
      this.error = '';
      localStorage.setItem('auth', 'true');
      this.router.navigate(['/profile']);
    } else {
      this.error = 'Username and password are wrong';
    }
  }
}
