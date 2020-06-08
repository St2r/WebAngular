import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-myspace',
  templateUrl: './myspace.component.html',
  styleUrls: ['./myspace.component.css']
})
export class MyspaceComponent implements OnInit {
  userInfo: UserInfo;

  constructor() {
  }

  ngOnInit() {
    this.loadUserInfo();
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
    };
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
}
