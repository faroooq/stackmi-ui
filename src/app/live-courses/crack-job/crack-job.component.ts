import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-crack-job',
  templateUrl: './crack-job.component.html',
  styleUrls: ['./crack-job.component.css']
})
export class CrackJobComponent implements OnInit {

  public sendCourse: Subject<string> = new Subject<string>();

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
