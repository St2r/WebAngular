import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {
  @Input()
  block: string;

  constructor() {
  }

  ngOnInit() {
  }

}
