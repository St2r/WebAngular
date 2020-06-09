import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../model/comment';
import {formatDistance, addDays} from 'date-fns';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()
  articleId: string;

  @Input()
  comments: Comment[];

  // like(): void {
  //   this.likes = 1;
  //   this.dislikes = 0;
  // }
  //
  // dislike(): void {
  //   this.likes = 0;
  //   this.dislikes = 1;
  // }


  jumpToPersonPage(userId: string) {
    console.log('此处应跳转到个人界面: ' + userId);
  }


  getDateDistance(curDate: Date) {
    return formatDistance(curDate, new Date());
  }

  getAvatar(userId: string) {
    return 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png';
  }

  Like(i: number) {
    if (this.comments[i].LikeStatus === 0) {
      this.comments[i].Likes += 1;
      this.comments[i].LikeStatus = 1;
    } else if (this.comments[i].LikeStatus === -1) {
      this.comments[i].Likes += 1;
      this.comments[i].Dislikes -= 1;
      this.comments[i].LikeStatus = 1;
    } else {
      this.comments[i].Likes -= 1;
      this.comments[i].LikeStatus = 0;
    }
    // 数据传送回数据库
  }

  DisLike(i: number) {
    if (this.comments[i].LikeStatus === 0) {
      this.comments[i].Dislikes += 1;
      this.comments[i].LikeStatus = -1;
    } else if (this.comments[i].LikeStatus === 1) {
      this.comments[i].Likes -= 1;
      this.comments[i].Dislikes += 1;
      this.comments[i].LikeStatus = -1;
    } else {
      this.comments[i].Dislikes -= 1;
      this.comments[i].LikeStatus = 0;
    }
    // 数据传送回数据库
  }

  constructor() {
  }

  ngOnInit() {
  }

}
