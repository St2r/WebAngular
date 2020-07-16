import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IFollowComponent } from './i-follow.component';

describe('IFollowComponent', () => {
  let component: IFollowComponent;
  let fixture: ComponentFixture<IFollowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IFollowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
