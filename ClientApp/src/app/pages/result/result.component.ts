import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticleInfo} from 'src/app/model/article-info';
import {AttachmentInfo} from 'src/app/model/attachment';
import {FetchDataService} from 'src/app/services/fetch-data.service';
import {UserBaseInfo} from '../../model/user-base-info';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  search_type: number;
  search_stable: any;

  search_content: string;

  user_res: UserBaseInfo[];
  article_res: ArticleInfo[];
  attachment_res: AttachmentInfo[];

  constructor(private routerinfo: ActivatedRoute, private router: Router, private fetchservice: FetchDataService) {
    this.routerinfo.queryParams.subscribe(
      result => {
        this.search_content = result['content'];
        this.search_type = result['type'];
      }
    );
    this.search_stable = this.search_type;
  }

  ngOnInit() {
  }

  async search() {
    if (this.search_content === '') {
      this.router.navigate(['/search']).then();
    }
    if (this.search_type == 1) {
      this.article_res = await this.fetchservice.getArticleByKeyword(this.search_content);
    } else if (this.search_type == 2) {
      this.user_res = await this.fetchservice.getUserByKeyword(this.search_content);
    } else if (this.search_type == 3) {
      this.attachment_res = await this.fetchservice.getAttachmentByKeyword(this.search_content);
    }
    this.refresh_type();
  }

  refresh_type() {
    this.search_stable = this.search_type;
  }

}
