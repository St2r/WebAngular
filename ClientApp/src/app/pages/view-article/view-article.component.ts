import {Component, Inject, Input, OnInit} from '@angular/core';
import {ArticleContent} from '../../model/article-content';
import {Comment} from '../../model/comment';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {CommentComponent} from '../../components/comment/comment.component';
import {formatDistance, addDays} from 'date-fns';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent implements OnInit {
  articleId = this.router.snapshot.paramMap.get('articleId');

  article: ArticleContent;

  comments: Comment[];

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private router: ActivatedRoute, private route: Router) {
    http.post<ArticleContent>(baseUrl + 'getArticle', this.articleId).subscribe(result => {
      this.article = result;
    }, error => console.error(error));

    http.post<Comment[]>(baseUrl + 'getComments', this.articleId).subscribe(result => {
      this.comments = result;
    }, error => console.error(error));

// 模拟从后端收到的文章
    this.article = new class implements ArticleContent {
      articleID: string;
      content: string;
      limit: number;
      tags: string[];
      title: string;
      username: string;
      Author = '李昂';
      Content = '<pre class="language-css"><code>.main {\n' +
        'margin 0;\n' +
        '}</code></pre>';
      Tag = ['测试', '标签'];
      Title = '标签测试';
    };
// 模拟从后端收到的评论数据
//     this.comments = [
//       new class implements Comment {
//         username = '17374158';
//         AuthorName = '李昂';
//         content = '我先评论一条';
//         Dislikes = 0;
//         likeStatus = 0;
//         likes = 0;
//         commentTime = addDays(new Date(), -2);
//       },
//       new class implements Comment {
//         username = '17374158';
//         AuthorName = '李昂';
//         content = '再来一条-测试Like和Dislike';
//         Dislikes = 10;
//         likeStatus = 1;
//         likes = 10;
//         commentTime = addDays(new Date(), -1);
//       }
//     ];
    console.log(this.article.title);

    if (this.article == null) {
      this.route.navigate(['home']).then();
    }
  }

  ngOnInit() {
  }

}
