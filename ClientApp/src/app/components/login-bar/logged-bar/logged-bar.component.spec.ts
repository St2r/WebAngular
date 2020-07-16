import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedBarComponent } from './logged-bar.component';

describe('LoggedBarComponent', () => {
  let component: LoggedBarComponent;
  let fixture: ComponentFixture<LoggedBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
