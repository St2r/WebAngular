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
        nickname = 'my follow 1';
        avatarUrl = 'fack url';
        brief = 'my_brief';
        follow = 1;
        fans = 1000;
        point = 500;
        browse = 20000;
        like = 100;
        star = 100;
        loginCount = 2;
        birthday = '';
        registerData = '';
      },
      new class implements UserInfo {
        nickname = 'my follow 2';
        avatarUrl = 'fack url';
        brief = 'my_brief';
        follow = 1;
        fans = 1000;
        point = 500;
        browse = 20000;
        like = 100;
        star = 100;
        loginCount = 2;
        birthday = '';
        registerData = '';
      },
      new class implements UserInfo {
        nickname = 'my follow 3';
        avatarUrl = 'fack url';
        brief = 'my_brief';
        follow = 1;
        fans = 1000;
        point = 500;
        browse = 20000;
        like = 100;
        star = 100;
        loginCount = 2;
        birthday = '';
        registerData = '';
      },
    ]
  }

}
