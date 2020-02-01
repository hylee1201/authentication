import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../services/authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidator } from '../validators/username-validator';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  message = '';
  isSubmitted = false;

  form = new FormGroup({
    forgotPassword: new FormGroup({
      email: new FormControl('',
      [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
      ])
    })
  });

  constructor(private authenticationService: AuthenticationService) { }

  forgotPassword() {
    console.log('forgot password: ' + this.email.value);
    this.isSubmitted = true;
    this.authenticationService
        .sendEmailforResettingPassword(this.email.value)
        .then(res => {
          console.log(res);
          this.message = 'A password reset link has been sent to your email address';
        }, err => {
          console.log(err);
          this.message = err.message;
        });
  }

  onChange() {
    // console.log('onChange was called.');
    this.message = '';
  }

  get email() {
    return this.form.get('forgotPassword.email');
  }
}
