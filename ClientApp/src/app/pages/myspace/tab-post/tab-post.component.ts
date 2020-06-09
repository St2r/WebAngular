import { Component, OnInit } from '@angular/core';
import { Comment } from '../../../model/comment';
import { Article } from '../../../model/article';
import {formatDistance, addDays} from 'date-fns';

@Component({
  selector: 'app-tab-post',
  templateUrl: './tab-post.component.html',
  styleUrls: ['./tab-post.component.css']
})
export class TabPostComponent implements OnInit {

  my_post: postInfo[];

  constructor() { }

  ngOnInit() {
    this.loadPostInfo();
  }

  loadPostInfo() {
    this.my_post = [
      new class implements postInfo {
        comment = new class implements Comment {
          AuthorID = 'comment_author';
          AuthorName = 'comment author';
          Content = 'comment content';
          Likes = 0;
          Dislikes = 0;
          LikeStatus = 0;
          CommentTime = addDays(new Date(), -2);
        };
        article = new class implements Article {
          Title = 'title 1';
          Tag = ['tmp'];
          Author = 'article author';
          Content = 'tmp content';
        };
      }
    ];
  }
}

export interface postInfo {
  comment: Comment;
  article: Article;
}
