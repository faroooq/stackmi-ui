import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendDevComponent } from './frontend-dev.component';

describe('FrontendDevComponent', () => {
  let component: FrontendDevComponent;
  let fixture: ComponentFixture<FrontendDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontendDevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
