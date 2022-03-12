import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, TokenPayload } from '../../shared/services/auth-service';

export interface CountryCodes {
  name: string;
  flag: string;
  code: string;
  dail_code: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  // student: boolean = true;
  countryCodes: CountryCodes[] = [];
  loading: boolean;
  coursesList: Array<any>;
  formSubmitted: boolean = false;
  errorMsg: string;
  successMsg: string;
  signupForm = this.formBuilder.group({
    user_name: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    // student: new FormControl(true, [Validators.required]),
  });
  credentials: TokenPayload = {
    id: "",
    email: "",
    user_name: "",
    password: ""
  };

  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    public http: HttpClient,
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.formSubmitted = false;
    // this.getCountryCodes();
  }

  navigate(url) {
    this.router.navigateByUrl(url);
  }

  // isStudent() {
  //   this.student = !this.student;
  //   console.log(this.student)
  // }

  onSubmit(value) {
    this.loading = true;
    this.errorMsg = '';
    this.successMsg = '';
    this.formSubmitted = true;
    if (this.signupForm.valid) {
      const _v = this.signupForm.value;
      const form = new FormData();
      form.append('email', _v.email);
      form.append('user_name', _v.user_name);
      form.append('mobile', _v.mobile);
      form.append('password', _v.password);
      // form.append('student', _v.student);

      this.auth.signup(value).subscribe(
        (data) => {
          // console.log('register : ' + JSON.stringify(data))
          this.loading = false;
          this.successMsg = 'Email verification link sent. Please check your e-mail.'
          this.resetFields();
        },
        error => {
          this.loading = false;
          // console.log('err : ' + JSON.stringify(error))
          if (error.status === 400) {
            this.errorMsg = 'The email address you have entered is already associated with another account.';
          } else if (error.status === 405) {
            this.successMsg = 'Email verification link sent. Please check your e-mail.'
          }
        }
      );
    }
  }

  getCountryCodes() {
    this.http.get<any>('./../../assets/json/country-codes.json').subscribe({
      next: data => {
        this.countryCodes = data;
      },
      error: error => {
        console.error('There was an error!', error);
      }
    })
  }

  resetFields() {
    this.formSubmitted = true;
    this.signupForm = this.formBuilder.group({
      user_name: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      // student: new FormControl('', Validators.required),
    });
  }
}
