import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { TimeFormat } from 'src/app/shared/pipe/time.pipe';
import { HttpService } from 'src/app/shared/services/http.service';

class Events {
  registered_users_count: any;
  constructor(
    public id: String,
    public event_name: String,
    public event_host: String,
    public event_url: String,
    public photo_url: String,
    public email: String,
    public mobile: String,
    public start_date: String,
    public end_date: String,
    public event_start_time: String,
    public event_end_time: String,
    public duration: String,
    public event_price: String,
    public description: String,
    public course_enabled: Boolean
  ) { }
}

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent implements OnInit {

  events: Array<Events>;
  loading: boolean;
  getImages: any[];
  is_registered: boolean;

  public sendCourse: Subject<string> = new Subject<string>();

  constructor(
    public router: Router,
    public http: HttpService,
    public timePipe: TimeFormat
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.getEvents();
  }

  getEvents() {
    this.http.getAll('all-courses')
      .pipe(
        map(res => {
          return res.map(event => {
            return new Events(
              event.id,
              event.event_name,
              event.event_host,
              event.event_url,
              event.photo_url,
              event.email,
              event.mobile,
              event.start_date,
              event.end_date,
              event.event_start_time,
              event.event_end_time,
              event.duration,
              event.event_price,
              event.description,
              event.course_enabled
            );
          });
        })
      )
      .subscribe(
        data => {
          this.events = data;
          // console.log(this.events)
          this.loading = false;
        },
        error => {
          // console.log(error);
        });
  }

  selectedCourse(data) {
    this.sendCourse.next(data);
  }

  ngOnDestroy() {
    this.sendCourse.unsubscribe();
  }
}
