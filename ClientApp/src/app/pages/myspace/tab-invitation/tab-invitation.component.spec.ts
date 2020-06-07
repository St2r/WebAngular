import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabInvitationComponent } from './tab-invitation.component';

describe('TabInvitationComponent', () => {
  let component: TabInvitationComponent;
  let fixture: ComponentFixture<TabInvitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabInvitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
