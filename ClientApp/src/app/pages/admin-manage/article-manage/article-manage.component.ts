import { Component, OnInit } from '@angular/core';
import { ArticleInfo } from 'src/app/model/article-info';

@Component({
  selector: 'app-article-manage',
  templateUrl: './article-manage.component.html',
  styleUrls: ['./article-manage.component.css']
})
export class ArticleManageComponent implements OnInit {
  article_list: ArticleInfo[];
  
  constructor() { }

  ngOnInit() {
    this.loadArticleInfo();
  }

// TODO 请求数据
  loadArticleInfo() {
    this.article_list = [
      new class implements ArticleInfo {
        // 文章ID
        articleID: '111';
        // 文章所属板块
        block: '222';

        // 文章标题
        title: '114514';
        // 文章头
        header: '???';
        // 封面 可选
        coverUrl: 'fack';

        // 点赞数
        like: 10;
        // 回复数
        review: 1;
        // 浏览数
        browse: 1;
        // 收藏数
        star: 1;

        // 最后回复时间
        lastReviewTime: 'jintian';

        // 楼主信息
        // 用户名
        username: 'name';
        // 昵称
        nickname: 'name';
        // 头像
        avatarUrl: 'fack';

        // 是否为置顶文章
        isPinned: true;
        // 是否为精华文章
        isElite: true;
      }
    ]
  }

}
