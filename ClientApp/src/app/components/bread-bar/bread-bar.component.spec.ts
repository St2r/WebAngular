import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadBarComponent } from './bread-bar.component';

describe('BreadBarComponent', () => {
  let component: BreadBarComponent;
  let fixture: ComponentFixture<BreadBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
