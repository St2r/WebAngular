import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabStarComponent } from './tab-star.component';

describe('TabStarComponent', () => {
  let component: TabStarComponent;
  let fixture: ComponentFixture<TabStarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabStarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
