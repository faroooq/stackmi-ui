import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtNgCurriculumComponent } from './ft-ng-curriculum.component';

describe('FtNgCurriculumComponent', () => {
  let component: FtNgCurriculumComponent;
  let fixture: ComponentFixture<FtNgCurriculumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FtNgCurriculumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FtNgCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
