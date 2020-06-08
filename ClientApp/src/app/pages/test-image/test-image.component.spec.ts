import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestImageComponent } from './test-image.component';

describe('TestImageComponent', () => {
  let component: TestImageComponent;
  let fixture: ComponentFixture<TestImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
