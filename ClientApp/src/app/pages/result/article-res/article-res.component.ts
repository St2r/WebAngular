import {Component, OnInit, Input} from '@angular/core';
import {ArticleInfo} from 'src/app/model/article-info';
import {Router} from '@angular/router';

@Component({
  selector: 'app-article-res',
  templateUrl: './article-res.component.html',
  styleUrls: ['./article-res.component.css']
})
export class ArticleResComponent implements OnInit {
  @Input() article_list: ArticleInfo[];

  got_res: boolean;

  constructor(private router: Router) {
  }

  ngOnInit() {
    if (this.article_list != null && this.article_list.length > 0) {
      this.got_res = true;
    } else {
      this.got_res = true;
    }
  }

  viewArticle(articleId: string, blockname: string) {
    this.router.navigate(['/article'], {
      queryParams: {operation: 'view', block: blockname, articleId: articleId}
    }).then();
  }

}
