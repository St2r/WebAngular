import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBlockComponent } from './user-block.component';

describe('UserBlockComponent', () => {
  let component: UserBlockComponent;
  let fixture: ComponentFixture<UserBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
