import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, UserDetails } from '../../shared/services/auth-service';

export interface User {
  user_name: string;
  mobile: string;
  email: string;
  skills?: string;
  experience?: string;
  profession?: string;
  profile_desc?: string;
}

export interface CountryCodes {
  name: string;
  flag: string;
  code: string;
  dail_code: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {

  countryCodes: CountryCodes[] = [];
  errorMsg: string;
  loading: boolean;
  formSubmitted: boolean = false;
  successMsg: string;
  profileForm = this.formBuilder.group({
    user_name: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required]),
    email: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.email]),
    skills: new FormControl('', [Validators.required]),
    experience: new FormControl('', [Validators.required]),
    profession: new FormControl('', [Validators.required]),
    profile_desc: new FormControl('', [Validators.required]),
  });
  user: User;
  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    public http: HttpClient,
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.formSubmitted = false;
    this.successMsg = '';
    // this.getCountryCodes();
    this.getUserProfile();
  }

  navigate(url) {
    this.router.navigateByUrl(url);
  }

  getUserProfile() {
    this.loading = true;
    this.auth.profile().subscribe(
      user => {
        this.user = user;
        // console.log(JSON.stringify(user))
        this.loading = false;
        this.profileForm.get('user_name')?.setValue(this.user.user_name);
        this.profileForm.get('mobile')?.setValue(this.user.mobile);
        this.profileForm.get('email')?.setValue(this.user.email);
        this.profileForm.get('skills')?.setValue(this.user.skills);
        this.profileForm.get('experience')?.setValue(this.user.experience);
        this.profileForm.get('profession')?.setValue(this.user.profession);
        this.profileForm.get('profile_desc')?.setValue(this.user.profile_desc);
      },
      err => {
        this.loading = false;
        console.error(err);
      }
    );
  }

  onSubmit(value) {
    this.loading = true;
    this.successMsg = '';
    this.formSubmitted = true;
    if (this.profileForm.valid) {
      const _v = this.profileForm.value;
      const form = new FormData();
      form.append('user_name', _v.user_name);
      form.append('mobile', _v.mobile);
      form.append('email', _v.email);
      form.append('employer', _v.employer);
      form.append('experience', _v.experience);

      this.auth.updateUser(value).subscribe(
        user => {
          this.loading = false;
          // this.user = user;
          this.successMsg = 'You have successfully updated your profile details.'
          // this.router.navigateByUrl('/profile');
          // this.resetFields();
        },
        err => {
          this.loading = false;
          console.error(err);
        }
      );

    }
  }

  resetFields() {
    this.formSubmitted = true;
    this.profileForm = this.formBuilder.group({
      user_name: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
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

  forgotPassword() {
    this.router.navigateByUrl('forgot');
  }
}
