import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserResComponent } from './user-res.component';

describe('UserResComponent', () => {
  let component: UserResComponent;
  let fixture: ComponentFixture<UserResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
