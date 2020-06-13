import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../model/comment';
import {formatDistance, addDays} from 'date-fns';
import {CommentService} from '../../services/comment.service';
import {ValueConverter} from '@angular/compiler/src/render3/view/template';
import {Router} from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()
  articleID: string;

  comments: Comment[];

  loading: boolean;

  sort: string;
  filter: string;

  constructor(private commentService: CommentService, private router: Router) {
    this.loading = true;
    this.sort = 'latest';
    this.filter = 'all';
  }

  ngOnInit() {
    this.loadComments().then(
      () => this.loading = false
    );
  }

  reloadData() {
    return;
  }

  jumpToPersonPage(userId: string) {
    this.router.navigate(['/my-space' + userId]).then();
  }


  getDateDistance(curDate: string) {
    const d = new Date();
    const s = curDate.split('-');
    d.setFullYear(+s[0], +s[1] - 1, +s[2]);
    d.setHours(+s[3], +s[4]);
    return formatDistance(d, new Date());
  }

  async loadComments() {
    this.comments = await this.commentService.getComments(this.articleID);
  }

  Like(i: number) {
    if (this.comments[i].likeStatus === 0) {
      this.comments[i].likes += 1;
      this.comments[i].likeStatus = 1;
    } else if (this.comments[i].likeStatus === -1) {
      this.comments[i].likes += 1;
      this.comments[i].likeStatus = 1;
    } else {
      this.comments[i].likes -= 1;
      this.comments[i].likeStatus = 0;
    }
    // 数据传送回数据库
  }

  DisLike(i: number) {
    if (this.comments[i].likeStatus === 0) {
      this.comments[i].likeStatus = -1;
    } else if (this.comments[i].likeStatus === 1) {
      this.comments[i].likes -= 1;
      this.comments[i].likeStatus = -1;
    } else {
      this.comments[i].likeStatus = 0;
    }
    // 数据传送回数据库
  }
}
