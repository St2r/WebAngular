import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachmentResComponent } from './attachment-res.component';

describe('AttachmentResComponent', () => {
  let component: AttachmentResComponent;
  let fixture: ComponentFixture<AttachmentResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttachmentResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachmentResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
