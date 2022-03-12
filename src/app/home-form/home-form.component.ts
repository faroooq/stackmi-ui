import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../shared/services/auth-service';
import { HttpService } from '../shared/services/http.service';

export interface CountryCodes {
  name: string;
  flag: string;
  code: string;
  dail_code: string;
}

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.css'],
})
export class HomeFormComponent implements OnInit {
  coursesList: Array<any>;
  countryCodes: CountryCodes[] = [];
  loading: boolean;
  formSubmitted: boolean = false;
  successMsg: string;
  registerForm = this.formBuilder.group({
    user_name: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    course_name: new FormControl('', [Validators.required]),
  });
  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    public http: HttpService,
    public httpClient: HttpClient,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.formSubmitted = false;
    this.successMsg = '';
    // this.getCountryCodes();
  }

  navigate(url) {
    this.router.navigateByUrl(url);
  }

  onSubmit(value) {
    this.loading = true;
    // console.log('selected code : ' + this.mobile_code)
    this.successMsg = '';
    this.formSubmitted = true;
    if (this.registerForm.valid) {
      const _v = this.registerForm.value;
      const form = new FormData();
      form.append('user_name', _v.user_name);
      form.append('mobile', _v.mobile);
      form.append('email', _v.email);
      form.append('course_name', _v.course_name);

      this.http.create('course_reg_users', value).subscribe(
        (data) => {
          this.loading = false;
          this.successMsg = 'Thank you for registering. We will get back to you soon!'
        },
        error => {
          this.loading = false;
          // console.log('err : ' + JSON.stringify(error))
          this.successMsg = 'Sorry, we can`t take your request Now.'
        }
      );
      this.resetFields();
    }
  }

  resetFields() {
    this.formSubmitted = true;
    this.registerForm = this.formBuilder.group({
      user_name: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      course_name: new FormControl('', Validators.required),
    });
  }

  getCountryCodes() {
    this.httpClient.get<any>('./../../assets/json/country-codes.json').subscribe({
      next: data => {
        this.countryCodes = data;
      },
      error: error => {
        console.error('There was an error!', error);
      }
    })
  }
}
