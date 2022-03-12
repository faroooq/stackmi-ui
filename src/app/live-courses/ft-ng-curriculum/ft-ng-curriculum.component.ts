import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-ft-ng-curriculum',
  templateUrl: './ft-ng-curriculum.component.html',
  styleUrls: ['./ft-ng-curriculum.component.css']
})
export class FtNgCurriculumComponent implements OnInit {

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
