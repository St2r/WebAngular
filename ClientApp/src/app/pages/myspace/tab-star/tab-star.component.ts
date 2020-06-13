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

  constructor(private fetchService: FetchDataService) { }

  ngOnInit() {
    this.loadMyInvitation();
  }

  loadMyInvitation() {
    this.fetchService.getStarArticleByUser(this.targetName).subscribe(
      article => this.starArticle=article
    );
  }

}
