import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-bd-pt-curriculum',
  templateUrl: './bd-pt-curriculum.component.html',
  styleUrls: ['./bd-pt-curriculum.component.css']
})
export class BdPtCurriculumComponent implements OnInit, OnDestroy {

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
