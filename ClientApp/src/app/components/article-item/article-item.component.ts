import {Component, Input, OnInit} from '@angular/core';
import {ArticleInfo} from '../../model/article-info';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {
  @Input()
  article: ArticleInfo;

  constructor() { }

  ngOnInit() {
  }

}
