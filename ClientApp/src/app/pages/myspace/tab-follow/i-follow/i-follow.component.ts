import { Component, OnInit } from '@angular/core';
import {UserInfo} from '../../../../model/user-info'

@Component({
  selector: 'app-i-follow',
  templateUrl: './i-follow.component.html',
  styleUrls: ['./i-follow.component.css']
})
export class IFollowComponent implements OnInit {

  my_follow: UserInfo[];

  constructor() { }

  ngOnInit() {
    this.loadMyFollow();
  }

  loadMyFollow() {
    this.my_follow = [
      new class implements UserInfo {
        username = 'my login name';
        nickname = 'test_name';
        avatarUrl = 'fack url';
        brief = '';
        follow = 1;
        fans = 1000;
        point = 500;
        browse = 20000;
        like = 100;
        star = 100;
        isFollowed = false;
        isFan = false;
      },
      new class implements UserInfo {
        username = 'my login name';
        nickname = 'test_name';
        avatarUrl = 'fack url';
        brief = '';
        follow = 1;
        fans = 1000;
        point = 500;
        browse = 20000;
        like = 100;
        star = 100;
        isFollowed = false;
        isFan = false;
      },
      new class implements UserInfo {
        username = 'my login name';
        nickname = 'test_name';
        avatarUrl = 'fack url';
        brief = '';
        follow = 1;
        fans = 1000;
        point = 500;
        browse = 20000;
        like = 100;
        star = 100;
        isFollowed = false;
        isFan = false;
      },
    ]
  }

}
