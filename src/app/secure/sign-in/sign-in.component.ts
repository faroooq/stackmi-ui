import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, TokenPayload } from '../../shared/services/auth-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  coursesList: Array<any>;
  formSubmitted: boolean = false;
  errorMsg: string;
  signinForm = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
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
    if (this.signinForm.valid) {
      const _v = this.signinForm.value;
      this.auth.login(formData).subscribe(
        (data) => {
          // console.log('sign in : ' + JSON.stringify(data))
          if (data.user_verified) {
            this.router.navigateByUrl("/");
          } else {
            this.errorMsg = 'Your SignUp mail confirmation is pending. Please check you mail.'
          }
        },
        error => {
          if (error.status === 401) {
            this.errorMsg = 'Entered email-id or password is incorrect.'
          }
          // console.error(JSON.stringify(err.status));
        }
      );
    }
  }

  forgotPassword() {
    this.router.navigateByUrl('forgotpwd');
  }

  signUp() {
    this.router.navigateByUrl('signup');
  }
}
