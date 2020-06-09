import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdituserinfoComponent } from './edituserinfo.component';

describe('EdituserinfoComponent', () => {
  let component: EdituserinfoComponent;
  let fixture: ComponentFixture<EdituserinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdituserinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdituserinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
