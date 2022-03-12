import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService, TokenPayload } from '../../shared/services/auth-service';

export interface User {
  uid: string;
  user_name: string;
  mobile: string;
  email: string;
  employer?: string;
  experience?: string;
}

export interface CountryCodes {
  name: string;
  flag: string;
  code: string;
  dail_code: string;
}

@Component({
  selector: 'app-mentor-signup',
  templateUrl: './mentor-signup.component.html',
  styleUrls: ['./mentor-signup.component.css']
})
export class MentorSignupComponent implements OnInit {

  countryCodes: CountryCodes[] = [];
  errorMsg: string;
  loading: boolean;
  formSubmitted: boolean = false;
  successMsg: string;
  mentorForm = this.formBuilder.group({
    user_name: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    skills: new FormControl('', [Validators.required]),
    experience: new FormControl('', [Validators.required]),
    profession: new FormControl('', [Validators.required]),
    profile_desc: new FormControl('', [Validators.required]),
  });
  user: any;
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
    this.errorMsg = '';
    this.successMsg = '';
    this.formSubmitted = true;
    if (this.mentorForm.valid) {
      const _v = this.mentorForm.value;
      const form = new FormData();
      form.append('user_name', _v.user_name);
      form.append('mobile', _v.mobile);
      form.append('email', _v.email);
      form.append('skills', _v.skills);
      form.append('experience', _v.experience);
      form.append('profession', _v.profession);
      form.append('profile_desc', _v.profile_desc);
      this.authService.signup(value).subscribe(
        (data) => {
          this.loading = false;
          // console.log('register : ' + JSON.stringify(data))
          // this.router.navigateByUrl("/mentor");
          this.successMsg = 'Email verification link sent. Please check your e-mail.'
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
      this.resetFields();
    }
  }

  resetFields() {
    this.formSubmitted = true;
    this.mentorForm = this.formBuilder.group({
      user_name: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required]),
      skills: new FormControl('', Validators.required),
      experience: new FormControl('', Validators.required),
      profession: new FormControl('', Validators.required),
      profile_desc: new FormControl('', Validators.required),
    });
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

}
