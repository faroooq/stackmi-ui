import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService, UserDetails } from '../../shared/services/auth-service';
import { HttpService } from '../../shared/services/http.service';
import { DatePipe, isPlatformBrowser } from '@angular/common';
import { TimeFormat } from '../../shared/pipe/time.pipe';
import { Subject } from 'rxjs';
import { WindowService } from 'src/app/shared/services/window-service';

@Component({
  selector: 'app-register-courses',
  templateUrl: './register-courses.component.html',
  styleUrls: ['./register-courses.component.css']
})
export class RegisterCoursesComponent implements OnInit {

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
  public sendCourse: Subject<string> = new Subject<string>();
  windowRef: Window;
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
    this.windowRef = windowRef.getWindow();
    this.locationRef = windowRef.getLocation();
  }

  ngOnInit(): void {
    this.user = this.auth.isLoggedIn();
    const eventId = this.activatedRoute.snapshot.paramMap.get('id');
    this.getEventDetails(eventId);
  }

  getEventDetails(eventId) {
    this.loading = true;
    this.http.get('events', eventId)
      .subscribe(
        data => {
          this.event = data;
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

  selectedCourse(data) {
    this.sendCourse.next(data);
  }

  ngOnDestroy() {
    this.sendCourse.unsubscribe();
  }

}
