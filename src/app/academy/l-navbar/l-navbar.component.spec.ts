import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LNavbarComponent } from './l-navbar.component';

describe('LNavbarComponent', () => {
  let component: LNavbarComponent;
  let fixture: ComponentFixture<LNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
