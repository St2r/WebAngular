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

  my_post: PostInfo[];

  constructor(private fetchService:FetchDataService) { }

  ngOnInit() {
    this.loadPostInfo();
  }

  loadPostInfo() {
    // this.my_post = [
    //   new class implements PostInfo {
    //     comment = new class implements Comment {
    //       AuthorID = 'comment_author';
    //       AuthorName = 'comment author';
    //       Content = 'comment content';
    //       Likes = 0;
    //       Dislikes = 0;
    //       LikeStatus = 0;
    //       CommentTime = addDays(new Date(), -2);
    //     };
    //     article = new class implements ArticleInfo {
    //       Title = 'title 1';
    //       Tag = ['tmp'];
    //       Author = 'article author';
    //       Content = 'tmp content';
    //     };
    //   }
    // ];
    this.fetchService.getPostByUser(this.targetUser).subscribe(
      posts => this.my_post=posts
    );
  }
}
