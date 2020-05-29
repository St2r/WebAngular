import {Component, Inject, Input, OnInit} from '@angular/core';
import {Article} from '../../model/article';
import {Comment} from '../../model/comment';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Route, Router, Routes} from '@angular/router';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent implements OnInit {
  articleId = this.router.snapshot.paramMap.get('articleId');

  article: Article;

  comments: Comment[];

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private router: ActivatedRoute, private route: Router) {
    http.post<Article>(baseUrl + 'getArticle', this.articleId).subscribe(result => {
      this.article = result;
    }, error => console.error(error));

    http.post<Comment[]>(baseUrl + 'getComments', this.articleId).subscribe(result => {
      this.comments = result;
    }, error => console.error(error));
// 模拟从后端收到的数据
    this.article = new class implements Article {
      Author = '李昂';
      Content = '<h1>TestH1</h1><p>TestP</p>';
      Tag = ['测试', '标签'];
      Title = '标签测试';
    };
    console.log(this.article.Title);

    if (this.article == null) {
      this.route.navigate(['home']).then();
    }
  }

  ngOnInit() {
  }

}
