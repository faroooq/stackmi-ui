import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtRtCurriculumComponent } from './ft-rt-curriculum.component';

describe('FtRtCurriculumComponent', () => {
  let component: FtRtCurriculumComponent;
  let fixture: ComponentFixture<FtRtCurriculumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FtRtCurriculumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FtRtCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
