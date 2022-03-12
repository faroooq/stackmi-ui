import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-frontend-dev',
  templateUrl: './frontend-dev.component.html',
  styleUrls: ['./frontend-dev.component.css']
})
export class FrontendDevComponent implements OnInit {

  public sendCourse: Subject<string> = new Subject<string>();
  course_name = 'Angular Beginners Course';

  @Output() messageEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  selectedCourse(data) {
    this.sendCourse.next(data);
  }

  ngOnDestroy() {
    this.sendCourse.unsubscribe();
    this.messageEvent.unsubscribe();
  }
}
