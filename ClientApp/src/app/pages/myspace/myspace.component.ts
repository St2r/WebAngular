import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-myspace',
  templateUrl: './myspace.component.html',
  styleUrls: ['./myspace.component.css']
})
export class MyspaceComponent implements OnInit {
  userInfo: UserInfo;

  userBasicInfo: UserBasicInfo;

  recent_visiter: VisiterInfo[];

  favor_block: BlockInfo[];

  constructor() {
  }

  ngOnInit() {
    this.loadUserInfo();
    this.loadUserBasicInfo();
    this.modifyGreeting();
    this.loadVisiterInfo();
    this.loadFavorBlockInfo();
  }

  // todo 请求后端
  loadUserInfo() {
    this.userInfo = new class implements UserInfo {
      follow = 1;
      fans = 1000;
      point = 500;
      browse = 20000;
      like = 100;
      star = 100;
      login = 2;
    };
  }

  loadUserBasicInfo() {
    this.userBasicInfo = new class implements UserBasicInfo {
      name = 'test_name';
      greeting = '';
    };
  }

  modifyGreeting() {
    if (this.userBasicInfo.greeting=='') {
      this.userBasicInfo.greeting = 'ta 比较懒还没有说明';
    }
  }

  loadVisiterInfo() {
    this.recent_visiter = [
      new class implements VisiterInfo {
        image = 'null';
        name = 'visiter_1';
      },
      new class implements VisiterInfo {
        image = 'null';
        name = 'visiter_2';
      },
      new class implements VisiterInfo {
        image = 'null';
        name = 'visiter_3';
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

// todo:: 统一
export interface UserInfo {
  follow: number;
  fans: number;
  point: number;
  browse: number;
  like: number;
  star: number;
  login: number;
}

export interface UserBasicInfo {
  name: String;
  greeting: String;
}

export interface VisiterInfo {
  image: String;
  name: String;
}

export interface BlockInfo {
  image: String;
  name: String;
  have_news: boolean;
}