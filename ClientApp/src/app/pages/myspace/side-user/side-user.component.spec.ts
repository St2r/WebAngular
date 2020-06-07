import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideUserComponent } from './side-user.component';

describe('SideUserComponent', () => {
  let component: SideUserComponent;
  let fixture: ComponentFixture<SideUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
