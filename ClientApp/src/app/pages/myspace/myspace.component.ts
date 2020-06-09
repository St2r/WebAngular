import {Component, OnInit} from '@angular/core';
import {UserInfo} from '../../model/user-info';
import { UserPrivateInfo } from '../../model/user-private-info';

@Component({
  selector: 'app-myspace',
  templateUrl: './myspace.component.html',
  styleUrls: ['./myspace.component.css']
})
export class MyspaceComponent implements OnInit {
  userInfo: UserInfo;

  userPrivateInfo: UserPrivateInfo;

  recent_visiter: UserInfo[];

  favor_block: BlockInfo[];

  constructor() {
  }

  ngOnInit() {
    this.loadUserInfo();
    this.modifyGreeting();
    this.loadUserPrivateInfo();
    this.loadVisiterInfo();
    this.loadFavorBlockInfo();
  }

  // todo 请求后端
  loadUserInfo() {
    this.userInfo = new class implements UserInfo {
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
    };
  }

  modifyGreeting() {
    if (this.userInfo.brief=='') {
      this.userInfo.brief = 'ta 比较懒还没有说明';
    }
  }

  loadUserPrivateInfo() {
    this.userPrivateInfo = new class implements UserPrivateInfo {
      username = 'my login name';
      loginCount = 20;
      birthday = '1970-1-1';
      registerData = '1970-1-1';
    }
  }

  loadVisiterInfo() {
    this.recent_visiter = [
      new class implements UserInfo {
        username = 'login in name';
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
        username = 'login in name';
        nickname = 'test_name 2';
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
        username = 'login in name';
        nickname = 'test_name 3';
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
