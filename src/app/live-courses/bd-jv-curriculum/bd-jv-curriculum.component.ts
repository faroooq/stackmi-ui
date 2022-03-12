import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-bd-jv-curriculum',
  templateUrl: './bd-jv-curriculum.component.html',
  styleUrls: ['./bd-jv-curriculum.component.css']
})
export class BdJvCurriculumComponent implements OnInit {

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
