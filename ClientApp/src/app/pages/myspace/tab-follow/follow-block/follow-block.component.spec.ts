import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowBlockComponent } from './follow-block.component';

describe('FollowBlockComponent', () => {
  let component: FollowBlockComponent;
  let fixture: ComponentFixture<FollowBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
