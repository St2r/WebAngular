import {Component, Input, OnInit} from '@angular/core';
import {UserInfo} from '../../../model/user-info'

@Component({
  selector: 'app-tab-follow',
  templateUrl: './tab-follow.component.html',
  styleUrls: ['./tab-follow.component.css']
})
export class TabFollowComponent implements OnInit {
  @Input()
  targetUser: string;

  loginUser: string;

  my_follow: UserInfo[];

  constructor() { }

  ngOnInit() {
    this.loginUser = 'tab-user';
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
        login = 2;
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
        login = 2;
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
        login = 2;
        birthday = '';
        registerData = '';
      },
    ]
  }

}
