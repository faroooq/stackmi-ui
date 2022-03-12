import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, TokenPayload } from '../../shared/services/auth-service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  coursesList: Array<any>;
  formSubmitted: boolean = false;
  errorMsg: string;
  successMsg: string;
  forgotForm = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email])
  });
  credentials: TokenPayload = {
    id: "",
    email: "",
    password: ""
  };

  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.formSubmitted = false;
  }

  onSubmit(formData) {
    this.errorMsg = '';
    this.formSubmitted = true;
    if (this.forgotForm.valid) {
      const _v = this.forgotForm.value;
      this.auth.forgotPassword(formData).subscribe(
        (data) => {
          // console.log(data)
          this.successMsg = data;
          // console.log('sign in : ' + JSON.stringify(data))
          if (data.user_verified) {
          } else {
            if (data.status === "200") {
              this.successMsg = 'Email verification link sent. Please check your e-mail.';
            } else if (data.status === "201") {
              this.successMsg = 'There is no user associated with this account. Please Signup.';
            }
          }
        },
        error => {
          if (error.status === 401) {
            this.errorMsg = 'Entered email-id is incorrect.'
          } else if (error.status === 405) {
            this.successMsg = 'Email verification link sent. Please check your e-mail.'
          }
          // console.error(JSON.stringify(err.status));
        }
      );
    }
  }

  signUp() {
    this.router.navigateByUrl('signup');
  }

}
