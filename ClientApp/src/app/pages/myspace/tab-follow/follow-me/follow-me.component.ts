import { Component, OnInit } from '@angular/core';
import {UserInfo} from '../../../../model/user-info'

@Component({
  selector: 'app-follow-me',
  templateUrl: './follow-me.component.html',
  styleUrls: ['./follow-me.component.css']
})
export class FollowMeComponent implements OnInit {

  follow_me: UserInfo[];

  constructor() { }

  ngOnInit() {
    this.loadFollowMe();
  }

  loadFollowMe() {
    this.follow_me = [
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
