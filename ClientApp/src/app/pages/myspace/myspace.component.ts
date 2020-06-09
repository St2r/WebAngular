import {Component, OnInit} from '@angular/core';
import {UserInfo} from '../../model/user-info'

@Component({
  selector: 'app-myspace',
  templateUrl: './myspace.component.html',
  styleUrls: ['./myspace.component.css']
})
export class MyspaceComponent implements OnInit {
  userInfo: UserInfo;

  recent_visiter: UserInfo[];

  favor_block: BlockInfo[];

  constructor() {
  }

  ngOnInit() {
    this.loadUserInfo();
    this.modifyGreeting();
    this.loadVisiterInfo();
    this.loadFavorBlockInfo();
  }

  // todo 请求后端
  loadUserInfo() {
    this.userInfo = new class implements UserInfo {
      nickname = 'test_name';
      avatarUrl = 'fack url';
      brief = '';
      follow = 1;
      fans = 1000;
      point = 500;
      browse = 20000;
      like = 100;
      star = 100;
      loginCount = 2;
      birthday = '';
      registerData = '';
    };
  }

  modifyGreeting() {
    if (this.userInfo.brief=='') {
      this.userInfo.brief = 'ta 比较懒还没有说明';
    }
  }

  loadVisiterInfo() {
    this.recent_visiter = [
      new class implements UserInfo {
        nickname = 'test_name';
        avatarUrl = 'fack url';
        brief = '';
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
        nickname = 'test_name';
        avatarUrl = 'fack url';
        brief = '';
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
        nickname = 'test_name';
        avatarUrl = 'fack url';
        brief = '';
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

  loadFavorBlockInfo() {
    this.favor_block = [
      new class implements BlockInfo {
        image = 'null';
        name = 'block_1';
        have_news = true;
      },
      new class implements BlockInfo {
        image = 'null';
        name = 'block_2';
        have_news = false;
      },
      new class implements BlockInfo {
        image = 'null';
        name = 'block_3';
        have_news = true;
      },
    ]
  }
}

export interface BlockInfo {
  image: String;
  name: String;
  have_news: boolean;
}
