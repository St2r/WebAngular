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

  my_star_invitation:ArticleInfo[];

  constructor(private fetchService:FetchDataService) { }

  ngOnInit() {
    this.loadMyInvitation();
  }

  loadMyInvitation() {
    // this.my_invitation = [
    //   new class implements Article {
    //     Title = 'title 1';
    //     Tag = ['tmp'];
    //     Author = 'author_tmp';
    //     Content = 'tmp content';
    //   },
    //   new class implements Article {
    //     Title = 'title 2';
    //     Tag = ['tmp'];
    //     Author = 'author_tmp';
    //     Content = 'tmp content';
    //   },
    //   new class implements Article {
    //     Title = 'title 3';
    //     Tag = ['tmp'];
    //     Author = 'author_tmp';
    //     Content = 'tmp content';
    //   },
    // ]
    this.fetchService.getStarArticleByUser(this.targetName).subscribe(
      article => this.my_star_invitation=article
    );
  }

}
