import { Component, OnInit, Input } from '@angular/core';
import {ArticleInfo} from '../../../model/article-info';
import { FetchDataService } from 'src/app/services/fetch-data.service';

@Component({
  selector: 'app-tab-star',
  templateUrl: './tab-star.component.html',
  styleUrls: ['./tab-star.component.css']
})
export class TabStarComponent implements OnInit {
  @Input() targetName;

  starArticle: ArticleInfo[];
  loading: boolean;

  constructor(private fetchService: FetchDataService) {
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

}
