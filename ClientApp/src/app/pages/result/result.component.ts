import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserInfo} from 'src/app/model/user-info';
import {ArticleInfo} from 'src/app/model/article-info';
import {AttachmentInfo} from 'src/app/model/attachment';
import {FetchDataService} from 'src/app/services/fetch-data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  search_type: any;
  search_stable: any;

  search_content: string;

  user_res: UserInfo[];
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

  search() {
    if (this.search_content === '') {
      this.router.navigate(['/search']);
    }
    if (this.search_type === 1) {
      this.fetchservice.getArticleByKeyword(this.search_content).subscribe(
        res => this.article_res = res
      );
    } else if (this.search_type === 2) {
      this.fetchservice.getUserByKeyword(this.search_content).subscribe(
        res => this.user_res = res
      );
    } else if (this.search_type === 3) {
      this.fetchservice.getAttachmentByKeyword(this.search_content).subscribe(
        res => this.attachment_res = res
      );
    }
    this.refresh_type();
  }

  refresh_type() {
    this.search_stable = this.search_type;
  }

}
