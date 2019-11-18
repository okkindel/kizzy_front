import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthApiService } from 'src/app/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isRegistering = false;
  registerForm: FormGroup;

  constructor(
    private service: AuthApiService,
    private form: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.registerForm = this.form.group(
      {
        email: ['', Validators.required],
        password: ['', Validators.required],
        repassword: ['', Validators.required]
      },
      { validator: this.checkPasswords }
    );
  }

  checkPasswords(group: FormGroup) {
    const pass = group.get('password').value;
    const repass = group.get('repassword').value;
    return pass === repass && pass.length > 5 ? null : { notSame: true };
  }

  register() {
    if (!this.registerForm.valid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    this.isRegistering = true;

    this.service.register(this.registerForm.value).subscribe(
      res => {
        this.service.currentLoggedUser = this.registerForm.get('email').value;
        this.service.isLoggedIn.next(true);
        this.service.setToken(res.token);
        this.router.navigate(['home']);
      },
      (/*err*/) => {
        this.isRegistering = false;
      }
    );
  }

  goToLogin() {
    this.router.navigate(['login']);
  }
}
