import {Component, Input, OnInit} from '@angular/core';
import {ArticleContent} from '../../../model/article-content';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {
  @Input()
  articleID: string;

  articleContent: ArticleContent;

  loading: boolean;

  constructor(private userService: UserService) {
    this.loading = true;
  }

  ngOnInit() {
    this.loadArticle().then(
      () => this.checkLimit().then(
        () => this.loadComment().then(
          () => this.loading = false
        )
      )
    );
  }

  async checkLimit() {
    if (!this.userService.logged) {
      console.log('未登陆');
      return;
    }
    const userInfo = await this.userService.getLoggedUserInfo();
    if (userInfo.level < this.articleContent.limit) {
      console.log('权限不足');
    }
  }

  async loadArticle() {
    this.articleContent = new class implements ArticleContent {
      articleID = '11';
      content = 'asd';
      limit = 1;
      tags = ['22', '2'];
      title = 't-title';
      username = 'user';
    };
  }

  async loadComment() {
    return;
  }

}
