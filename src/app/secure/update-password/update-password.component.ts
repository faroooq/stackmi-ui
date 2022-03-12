import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, TokenPayload } from '../../shared/services/auth-service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css'],
})
export class UpdatePasswordComponent implements OnInit {
  formSubmitted: boolean = false;
  errorMsg: string;
  loading: boolean;
  successMsg: string;
  form: TokenPayload;
  forgotForm = this.formBuilder.group({
    password: new FormControl('', [Validators.required]),
    confirmpwd: new FormControl('', [Validators.required]),
  });
  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.formSubmitted = false;
  }

  onSubmit(value) {
    this.loading = true;
    const user = this.auth.getUserDetails();
    // console.log('user : ' + JSON.stringify(user))
    this.errorMsg = '';
    this.successMsg = '';
    this.formSubmitted = true;
    if (this.forgotForm.valid) {
      const _v = this.forgotForm.value;
      let data = {
        "id": user._id,
        "email": user.email,
        "password": _v.password,
        "user_name": user.user_name,
      }
      if (_v.password === _v.confirmpwd) {
        // console.log('user : ' + JSON.stringify(data))
        this.auth.updatePassword(data).subscribe(
          user => {
            this.loading = false;
            // console.log(JSON.stringify(user))
            this.successMsg = 'You have successfully updated your password.'
            this.router.navigateByUrl('/updatepwd');
            // this.getUserProfile();
          },
          err => {
            this.loading = false;
            this.errorMsg = err.message;
            // console.error(err);
          }
        );
      } else {
        this.loading = false;
        this.errorMsg = 'New password and confirm password did not match.';
      }
      this.resetFields();
    }
  }
  resetFields() {
    this.formSubmitted = true;
    this.forgotForm = this.formBuilder.group({
      password: new FormControl('', Validators.required),
      confirmpwd: new FormControl('', Validators.required),
    });
  }
}
