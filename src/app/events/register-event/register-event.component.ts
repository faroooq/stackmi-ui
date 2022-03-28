import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth-service';
import { HttpService } from '../../shared/services/http.service';
import { DatePipe, isPlatformBrowser } from '@angular/common';
import { TimeFormat } from '../../shared/pipe/time.pipe';
import { WindowService } from 'src/app/shared/services/window-service';

@Component({
  selector: 'app-register-event',
  templateUrl: './register-event.component.html',
  styleUrls: ['./register-event.component.css']
})
export class RegisterEventComponent implements OnInit {
  is_registered: boolean;
  id: any;
  registeredCount: string;
  user: boolean;

  eventRegForm = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [Validators.required]),
  });
  successMsg: string;
  formSubmitted: boolean;
  loading: boolean;
  event: any;
  onGoingEvent: boolean;
  eventCompleted: boolean;
  locationRef: Location;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    public http: HttpService,
    public auth: AuthService,
    public route: Router,
    public datepipe: DatePipe,
    public timepipe: TimeFormat,
    windowRef: WindowService,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {
    this.locationRef = windowRef.getLocation();
  }

  ngOnInit(): void {
    this.user = this.auth.isLoggedIn();
    const eventId = this.activatedRoute.snapshot.paramMap.get('id');
    this.getEventDetails(eventId);
  }

  getEventRegCount(eventId) {
    this.http.get('event_reg_users_count', eventId).subscribe(
      (data) => {
        this.registeredCount = data.length
        this.loading = false;
      },
      error => {
        // console.log('err : ' + JSON.stringify(error))
      }
    );
  }

  formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    // var ampm = hours >= 12 ? 'pm' : 'am';
    // hours = hours % 12;
    // hours = hours ? hours : 12; // the hour '0' should be '12'
    // hours = (hours + '').length == 1 ? `0${hours}` : hours;
    // minutes = (minutes + '').length == 1 ? `0${minutes}` : minutes;
    // var strTime = hours + ':' + minutes + ' ' + ampm;
    var strTime = hours + ':' + minutes;
    return strTime;
  }

  withoutTime(dateTime) {
    var date = new Date(dateTime.getTime());
    date.setHours(0, 0, 0, 0);
    return date;
  }

  getEventDetails(eventId) {
    this.loading = true;
    this.http.get('events', eventId)
      .subscribe(
        data => {
          this.event = data;
          let currentDate = new Date().getUTCDate();
          let currentMonth = new Date().getUTCMonth();
          let currentYear = new Date().getUTCFullYear();
          let startDate = new Date(this.event.event_start_date).getUTCDate();
          let endDate = new Date(this.event.event_end_date).getUTCDate();
          let endMonth = new Date(this.event.event_end_date).getUTCMonth();
          let endYear = new Date(this.event.event_end_date).getUTCFullYear();
          let startTime = this.event.event_start_time;
          let endTime = this.event.event_end_time;
          let currentTime = this.formatAMPM(new Date());
          // console.log('Current Time : ' + currentTime + ' -StartTime : ' + startTime + ' -EndTime : ' + endTime)
          // console.log('currentYear : ' + currentYear + ' endYear : ' + endYear)
          if (currentYear > endYear) {
            this.eventCompleted = true;
          } else if (currentMonth > endMonth) {
            this.eventCompleted = true;
          } else if (currentMonth == endMonth) {
            if (currentDate > endDate) {
              this.eventCompleted = true;
              // console.log('event completed 1')
            } else if (
              (currentDate == startDate) &&
              (currentTime >= startTime && currentTime <= endTime)
            ) {
              // console.log('event running')
              this.onGoingEvent = true;
            } else if (
              (currentDate == startDate) &&
              (currentTime >= startTime && currentTime >= endTime)
            ) {
              this.eventCompleted = true;
              // console.log('event completed 2')
            }
          } else if (currentMonth < endMonth) {
            this.eventCompleted = false;
            // console.log('Event yet to start')
          }
          this.getEventImages();
          this.getEventRegCount(this.event.event_name)
          this.loading = false;
        },
        error => {
          // console.log(error);
        });
  }



  navigateToEvent(url) {
    //console.log(url)
    if (isPlatformBrowser(this.platformId)) {
      this.locationRef.href = url;
    }
  }

  getEventImages() {
    this.loading = true;
    this.http.get('geteventimages', '').subscribe(
      (data) => {
        for (let img = 0; img < data.length; img++) {
          if (this.event.event_enabled) {
            let imageName = data[img].photoKey;
            imageName = imageName.replace('.png', '');
            imageName = imageName.replace('.jpeg', '');
            imageName = imageName.replace('.jpg', '');
            let eventName = 'events/' + this.event.event_name;
            if (eventName.trim() === imageName.trim()) {
              this.event.photo_url = data[img].photoUrl;
            }
          } else {
            console.log('Events button disabled.')
          }
        }
        this.loading = false;
      })
  }

  // Existing user event registration
  registerEvent(value, eventName) {
    const user = this.auth.getUserDetails();
    let regevent;
    if (value.email) {
      regevent = {
        "event_name": eventName,
        "email": value.email,
        "mobile": value.mobile
      }
    } else {
      regevent = {
        "event_name": eventName,
        "user_name": user.user_name,
        "email": user.email,
        "mobile": user.mobile
      }
    }
    //console.log('RegEvent : ' + JSON.stringify(regevent))
    this.http.create('event_reg_users', regevent).subscribe(
      (data) => {
        this.successMsg = 'Thank you for registering the event!'
        this.is_registered = true;
      },
      error => {
        // console.log('err : ' + JSON.stringify(error))
        this.successMsg = 'Sorry, we can`t take your request Now.'
      }
    );
  }

  // New user event registration
  onSubmit(value, eventName) {
    this.successMsg = '';
    this.formSubmitted = true;
    if (this.eventRegForm.valid) {
      const _v = this.eventRegForm.value;
      const form = new FormData();
      form.append('email', _v.email);
      form.append('mobile', _v.mobile);
      // console.log(value.email, eventName)
      this.registerEvent(value, eventName);
    }
    this.resetFields();
  }
  resetFields() {
    this.formSubmitted = true;
    this.eventRegForm = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required)
    })
  }
}
