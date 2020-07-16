import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttechmentManageComponent } from './attechment-manage.component';

describe('AttechmentManageComponent', () => {
  let component: AttechmentManageComponent;
  let fixture: ComponentFixture<AttechmentManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttechmentManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttechmentManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
