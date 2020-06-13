import { Component, OnInit, Input } from '@angular/core';
import {UserInfo} from '../../../../model/user-info'
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-i-follow',
  templateUrl: './i-follow.component.html',
  styleUrls: ['./i-follow.component.css']
})
export class IFollowComponent implements OnInit {
  @Input() targetName: string;

  my_follow: UserInfo[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadMyFollow();
  }

  loadMyFollow() {
  //   this.my_follow = [
  //     new class implements UserInfo {
  //       username = 'my login name';
  //       nickname = 'test_name';
  //       avatarUrl = 'fack url';
  //       brief = '';
  //       follow = 1;
  //       fans = 1000;
  //       level = 1;
  //       articles = 1;
  //       point = 500;
  //       browse = 20000;
  //       like = 100;
  //       star = 100;
  //       isFollowed = false;
  //       isFan = false;
  //     },
  //     new class implements UserInfo {
  //       username = 'my login name';
  //       nickname = 'test_name';
  //       avatarUrl = 'fack url';
  //       brief = '';
  //       follow = 1;
  //       fans = 1000;
  //       point = 500;
  //       level = 1;
  //       articles = 10;
  //       browse = 20000;
  //       like = 100;
  //       star = 100;
  //       isFollowed = false;
  //       isFan = false;
  //     },
  //     new class implements UserInfo {
  //       username = 'my login name';
  //       nickname = 'test_name';
  //       avatarUrl = 'fack url';
  //       brief = '';
  //       follow = 1;
  //       fans = 1000;
  //       point = 500;
  //       level = 2;
  //       articles = 10;
  //       browse = 20000;
  //       like = 100;
  //       star = 100;
  //       isFollowed = false;
  //       isFan = false;
  //     },
  //   ]
    this.userService.requestFollowList(this.targetName).subscribe(
      follow => this.my_follow=follow
    );
  }
}
