import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleResComponent } from './article-res.component';

describe('ArticleResComponent', () => {
  let component: ArticleResComponent;
  let fixture: ComponentFixture<ArticleResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
