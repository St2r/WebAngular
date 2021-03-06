import {Component, Input, OnInit} from '@angular/core';
import {ArticleContent} from '../../../model/article-content';
import {UserService} from '../../../services/user/user.service';
import {IdentityService} from '../../../services/identity/identity.service';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {
  @Input()
  articleId: number;

  articleContent: ArticleContent;

  loading: boolean;

  constructor(private userService: UserService, private identityService: IdentityService) {
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
    if (!this.identityService.logged) {
      console.log('未登陆');
      return;
    }
    const userDetailInfo = await this.userService.getDetailInfo(this.identityService.username);
    if (userDetailInfo.level < this.articleContent.limit) {
      console.log('权限不足');
    }
  }

  async loadArticle() {
    this.articleContent = new class implements ArticleContent {
      articleID = 11;
      content = '<pre class="language-cpp"><code>int main {\n' +
        '\n' +
        '}</code></pre>';
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
