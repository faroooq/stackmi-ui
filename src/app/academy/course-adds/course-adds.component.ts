import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-adds',
  templateUrl: './course-adds.component.html',
  styleUrls: ['./course-adds.component.css']
})
export class CourseAddsComponent implements OnInit {

  @Input() frameAvailable: string;

  constructor() { }

  ngOnInit(): void {
  }

}
