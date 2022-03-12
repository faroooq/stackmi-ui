import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdPtCurriculumComponent } from './bd-pt-curriculum.component';

describe('BdPtCurriculumComponent', () => {
  let component: BdPtCurriculumComponent;
  let fixture: ComponentFixture<BdPtCurriculumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BdPtCurriculumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BdPtCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
