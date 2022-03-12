import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdJvCurriculumComponent } from './bd-jv-curriculum.component';

describe('BdJvCurriculumComponent', () => {
  let component: BdJvCurriculumComponent;
  let fixture: ComponentFixture<BdJvCurriculumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BdJvCurriculumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BdJvCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
