import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../../model/comment';
import { ArticleInfo } from '../../../model/article-info';
import {formatDistance, addDays} from 'date-fns';
import { PostInfo } from '../../../model/post-info';
import { FetchDataService } from 'src/app/services/fetch-data.service';

@Component({
  selector: 'app-tab-post',
  templateUrl: './tab-post.component.html',
  styleUrls: ['./tab-post.component.css']
})
export class TabPostComponent implements OnInit {
  @Input() targetUser;

  myPost: PostInfo[];

  loading: boolean;

  constructor(private fetchService: FetchDataService) {
    this.loading = true;
  }

  ngOnInit() {
    this.loadPostInfo().then(
      () => this.loading = false
    );
  }

  async loadPostInfo() {
    this.myPost = await this.fetchService.getPostByUser(this.targetUser);
  }
}
