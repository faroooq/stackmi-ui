import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  coursesList: Array<any>;
  formSubmitted: boolean = false;
  successMsg: string;
  inquiryForm = this.formBuilder.group({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });
  constructor(
    private formBuilder: FormBuilder,
    public http: HttpService
  ) { }

  ngOnInit() {
    this.successMsg = '';
  }

  onSubmit(value) {
    this.successMsg = '';
    this.formSubmitted = true;
    if (this.inquiryForm.valid) {
      const _v = this.inquiryForm.value;
      const form = new FormData();
      form.append('name', _v.name);
      form.append('email', _v.email);
      form.append('mobile', _v.mobile);
      form.append('description', _v.course);

      this.http.create('contact', value).subscribe(
        (data) => {
          this.successMsg = 'Thank you for your request. We will get back to you soon.'
        },
        error => {
          // console.log('err : ' + JSON.stringify(error))
          this.successMsg = 'Sorry, we can`t take your request Now.'
        }
      );
      this.resetFields();
    }
  }

  resetFields() {
    this.formSubmitted = true;
    this.inquiryForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }
}
