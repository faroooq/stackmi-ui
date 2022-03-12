import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { HttpService } from '../shared/services/http.service';

class Events {
  registered_users_count: any;
  constructor(
    public id: String,
    public event_name: String,
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
    public event_enabled: Boolean
  ) { }
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  events: Array<Events>;
  loading: boolean;
  getImages: any[];
  is_registered: boolean;

  constructor(
    public router: Router,
    public http: HttpService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.getEvents();
  }

  getEvents() {
    this.http.getAll('events')
      .pipe(
        map(res => {
          return res.map(event => {
            return new Events(
              event.id,
              event.event_name,
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
              // event_enabled - Events enable button.
              event.event_enabled
            );
          });
        })
      )
      .subscribe(
        data => {
          this.events = data;
          // console.log(this.events)
          this.getEventImages();
          this.getEventRegCount();
          this.loading = false;
        },
        error => {
          // console.log(error);
        });
  }

  getEventImages() {
    this.http.get('geteventimages', '').subscribe(
      (data) => {
        // if (this.events.length === data.length) {
        for (let img = 0; img < data.length; img++) {
          for (let evnt = 0; evnt < this.events.length; evnt++) {
            if (this.events && this.events[evnt] && this.events[evnt].event_enabled) {
              let imageName = data[img].photoKey;
              imageName = imageName.replace('.png', '');
              imageName = imageName.replace('.jpeg', '');
              imageName = imageName.replace('.jpg', '');
              let eventName = 'events/' + this.events[evnt].event_name;
              // console.log('Image name: ' + imageName + " : " + eventName)
              if (eventName.trim() == imageName.trim()) {
                this.events[evnt].photo_url = data[img].photoUrl;
              }
            } else {
              console.log('Events button disabled.')
            }
          }
        }
        // } else {
        //   console.log('Length of Events and Uploaded Images does NOT match')
        // }
      })
  }

  getEventRegCount() {
    for (let evnt = 0; evnt < this.events.length; evnt++) {
      if (this.events[evnt].event_enabled) {
        this.http.get('event_reg_users_count', this.events[evnt].event_name).subscribe(
          (data) => {
            this.events[evnt].registered_users_count = data.length
            // console.log(this.events[evnt].registered_users_count)
            this.loading = false;
          },
          error => {
            // console.log('err : ' + JSON.stringify(error))
          }
        );
      }
    }
  }
}
