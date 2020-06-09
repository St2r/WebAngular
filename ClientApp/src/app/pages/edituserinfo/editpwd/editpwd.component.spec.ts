import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpwdComponent } from './editpwd.component';

describe('EditpwdComponent', () => {
  let component: EditpwdComponent;
  let fixture: ComponentFixture<EditpwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
