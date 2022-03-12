import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/shared/services/http.service';
import { AuthService } from 'src/app/shared/services/auth-service';
import { Subject } from 'rxjs';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-course-enroll',
  templateUrl: './course-enroll.component.html',
  styleUrls: ['./course-enroll.component.css']
})
export class CourseEnrollComponent implements OnInit {
  @Input() notifier: Subject<string> = new Subject<string>();
  coursesList: Array<any>;
  loading: boolean;
  formSubmitted: boolean = false;
  successMsg: string;
  user: any;
  event: any;
  registerCourseForm = this.formBuilder.group({
    user_name: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    course_name: new FormControl('', [Validators.required]),
    start_date: new FormControl('', [Validators.required]),
    end_date: new FormControl('', [Validators.required]),
    duration: new FormControl('', [Validators.required]),
    event_price: new FormControl('', [Validators.required]),
  });
  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    public http: HttpService,
    public httpClient: HttpClient,
    public authService: AuthService,
    public auth: AuthService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.formSubmitted = false;
    this.successMsg = '';
    this.notifier.subscribe(data => {
      this.successMsg = "";
      this.registerCourseForm.get('course_name')?.setValue(data);
      this.getEventDetails(data);
    })
  }

  getEventDetails(eventName) {
    this.user = this.auth.getUserDetails();
    this.loading = true;
    this.http.get('event', eventName)
      .subscribe(
        data => {
          this.event = data[0];
          this.registerCourseForm.get('user_name')?.setValue(this.user?.user_name);
          this.registerCourseForm.get('email')?.setValue(this.user?.email);
          this.registerCourseForm.get('mobile')?.setValue(this.user?.mobile);
          this.registerCourseForm.get('start_date')?.setValue(this.event?.start_date);
          this.registerCourseForm.get('end_date')?.setValue(this.event?.end_date);
          this.registerCourseForm.get('duration')?.setValue(this.event?.duration);
          this.registerCourseForm.get('event_price')?.setValue(this.event?.event_price);
          this.loading = false;
        },
        error => {
          // console.log(error);
        });
  }

  navigate(url) {
    this.router.navigateByUrl(url);
  }

  onSubmit(value) {
    if (this.registerCourseForm.valid) {
      this.loading = true;
      this.successMsg = '';
      this.formSubmitted = true;
      // console.log('selected code : ' + value)
      const _v = this.registerCourseForm.value;
      const form = new FormData();
      form.append('user_name', _v.user_name);
      form.append('mobile', _v.mobile);
      form.append('email', _v.email);
      form.append('course_name', _v.course_name);
      form.append('start_date', _v.start_date);
      form.append('end_date', _v.end_date);
      form.append('duration', _v.duration);
      form.append('event_price', _v.event_price);

      this.http.create('course_reg_users', value).subscribe(
        (data) => {
          this.loading = false;
          this.successMsg = 'Thank you for enrolling the Course. We are redirecting you to payments gateway!';
          setTimeout(() => {
            this.router.navigate(['secure/payments',
              {
                name: _v.user_name,
                course_name: _v.course_name,
                start_date: _v.start_date,
                end_date: _v.end_date,
                duration: _v.duration,
                event_price: _v.event_price
              }
            ])
          }, 4000);
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
    this.successMsg = "";
    this.formSubmitted = true;
    this.registerCourseForm = this.formBuilder.group({
      user_name: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      course_name: new FormControl('', Validators.required),
      start_date: new FormControl('', [Validators.required]),
      end_date: new FormControl('', [Validators.required]),
      duration: new FormControl('', [Validators.required]),
      event_price: new FormControl('', [Validators.required]),
    });
  }

  toggle() {
    $('.offcanvas-collapse').toggleClass('open');
  }

  ngOnDestroy() {
    this.notifier.unsubscribe();
  }
}
