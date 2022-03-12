import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrackJobComponent } from './crack-job.component';

describe('CrackJobComponent', () => {
  let component: CrackJobComponent;
  let fixture: ComponentFixture<CrackJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrackJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrackJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
