import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FansFollowsComponent } from './fans-follows.component';

describe('FansFollowsComponent', () => {
  let component: FansFollowsComponent;
  let fixture: ComponentFixture<FansFollowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FansFollowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FansFollowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
