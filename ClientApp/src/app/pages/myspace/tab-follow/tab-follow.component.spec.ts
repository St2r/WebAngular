import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabFollowComponent } from './tab-follow.component';

describe('TabFollowComponent', () => {
  let component: TabFollowComponent;
  let fixture: ComponentFixture<TabFollowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabFollowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
