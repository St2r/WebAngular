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
