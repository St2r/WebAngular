import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbasicinfoComponent } from './editbasicinfo.component';

describe('EditbasicinfoComponent', () => {
  let component: EditbasicinfoComponent;
  let fixture: ComponentFixture<EditbasicinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditbasicinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbasicinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
