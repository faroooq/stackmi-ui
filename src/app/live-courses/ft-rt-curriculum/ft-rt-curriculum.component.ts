import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-ft-rt-curriculum',
  templateUrl: './ft-rt-curriculum.component.html',
  styleUrls: ['./ft-rt-curriculum.component.css']
})
export class FtRtCurriculumComponent implements OnInit {

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
