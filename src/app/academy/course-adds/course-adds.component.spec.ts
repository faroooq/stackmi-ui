import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAddsComponent } from './course-adds.component';

describe('CourseAddsComponent', () => {
  let component: CourseAddsComponent;
  let fixture: ComponentFixture<CourseAddsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseAddsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
