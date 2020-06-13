import { Component, OnInit, Input } from '@angular/core';
import { ArticleInfo } from 'src/app/model/article-info';

@Component({
  selector: 'app-article-res',
  templateUrl: './article-res.component.html',
  styleUrls: ['./article-res.component.css']
})
export class ArticleResComponent implements OnInit {
  @Input() search_content:string;

  article_list:ArticleInfo[];

  constructor() { }

  ngOnInit() {
    this.loadArticleInfo();
  }

  // TODO 获取数据
  loadArticleInfo() {

  }

}
