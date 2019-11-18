import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthApiService } from 'src/app/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoggingIn = false;

  constructor(
    private service: AuthApiService,
    private form: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.form.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (!this.loginForm.valid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.isLoggingIn = true;

    this.service.login(this.loginForm.value).subscribe(
      res => {
        this.service.currentLoggedUser = this.loginForm.get('email').value;
        this.service.isLoggedIn.next(true);
        this.service.setToken(res.token);
        this.router.navigate(['home']);
      },
      (/*err*/) => {
        this.isLoggingIn = false;
      }
    );
  }

  goToRegister() {
    this.router.navigate(['register']);
  }
}
