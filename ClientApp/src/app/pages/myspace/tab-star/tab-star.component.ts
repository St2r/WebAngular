import { Component, OnInit, Input } from '@angular/core';
import {ArticleInfo} from '../../../model/article-info';
import { FetchDataService } from 'src/app/services/fetch-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-star',
  templateUrl: './tab-star.component.html',
  styleUrls: ['./tab-star.component.css']
})
export class TabStarComponent implements OnInit {
  @Input() targetName;

  starArticle: ArticleInfo[];
  loading: boolean;

  constructor(private fetchService: FetchDataService, private router:Router) {
    this.loading = true;
  }

  ngOnInit() {
    this.loadMyInvitation().then(
      () => this.loading = true
    );
  }

  async loadMyInvitation() {
    this.starArticle = await this.fetchService.getStarArticleByUser(this.targetName);
  }

  viewArticle(articleId: string, blockname: string) {
    this.router.navigate(['/article'], {
      queryParams: {operation: 'view', block: blockname, articleId: articleId}
    }).then();
  }

}
