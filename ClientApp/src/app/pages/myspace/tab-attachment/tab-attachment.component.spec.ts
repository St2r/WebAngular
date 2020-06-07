import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAttachmentComponent } from './tab-attachment.component';

describe('TabAttachmentComponent', () => {
  let component: TabAttachmentComponent;
  let fixture: ComponentFixture<TabAttachmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabAttachmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabAttachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
