import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FansFansComponent } from './fans-fans.component';

describe('FansFansComponent', () => {
  let component: FansFansComponent;
  let fixture: ComponentFixture<FansFansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FansFansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FansFansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
