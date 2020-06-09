import {Component, Input, OnInit} from '@angular/core';
import {UserInfo} from '../../model/user-info';
import {UserPrivateInfo} from '../../model/user-private-info';
import {BlockInfo, AdminInfo} from '../../model/block-info';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-myspace',
  templateUrl: './myspace.component.html',
  styleUrls: ['./myspace.component.css']
})
export class MyspaceComponent implements OnInit {
  @Input()
  visitor: string;

  userInfo: UserInfo;

  userPrivateInfo: UserPrivateInfo;

  recent_visiter: UserInfo[];

  favor_block: BlockInfo[];

  viewing_own_page: boolean;

  constructor(private routerInfo: ActivatedRoute) {
    this.routerInfo.params.subscribe((params: Params) => {
      this.visitor = params['visitor'];
      this.init();
    });
  }

  ngOnInit() { }

  init() {
    this.loadUserInfo();
    this.modifyGreeting();
    this.loadUserPrivateInfo();
    this.loadVisiterInfo();
    this.loadFavorBlockInfo();
    this.setViewMode();
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
    if (this.userInfo.brief == '') {
      this.userInfo.brief = 'ta 比较懒还没有说明';
    }
  }

  loadUserPrivateInfo() {
    this.userPrivateInfo = new class implements UserPrivateInfo {
      username = 'my login name';
      loginCount = 20;
      birthday = '1970-1-1';
      registerData = '1970-1-1';
    };
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
    ];
  }

  loadFavorBlockInfo() {
    this.favor_block = [
      new class implements BlockInfo {
        avatarUrl = '';
        blockName = 'test name';
        accessRight = 2;
        isFollowed = true;
        contentTotal = 100;
        followTotal = 20;
        todayTotal = 20;
        admins = [
          new class implements AdminInfo {
            username = 'login name';
            nickname = 'admin name';
            avatarUrl = 'fake url';
            identity = 0;
          },
          new class implements AdminInfo {
            username = 'login name';
            nickname = 'admin name';
            avatarUrl = 'fake url';
            identity = 1;
          },
        ];
      },
      new class implements BlockInfo {
        avatarUrl = '';
        blockName = 'test name';
        accessRight = 2;
        isFollowed = true;
        contentTotal = 100;
        followTotal = 20;
        todayTotal = 10;
        admins = [
          new class implements AdminInfo {
            username = 'login name';
            nickname = 'admin name';
            avatarUrl = 'fake url';
            identity = 0;
          },
          new class implements AdminInfo {
            username = 'login name';
            nickname = 'admin name';
            avatarUrl = 'fake url';
            identity = 1;
          },
        ];
      },
      new class implements BlockInfo {
        avatarUrl = '';
        blockName = 'test name';
        accessRight = 2;
        isFollowed = true;
        contentTotal = 100;
        followTotal = 20;
        todayTotal = 10;
        admins = [
          new class implements AdminInfo {
            username = 'login name';
            nickname = 'admin name';
            avatarUrl = 'fake url';
            identity = 0;
          },
          new class implements AdminInfo {
            username = 'login name';
            nickname = 'admin name';
            avatarUrl = 'fake url';
            identity = 1;
          },
        ];
      },
    ];
  }

  setViewMode() {
    this.viewing_own_page = true;
  }
}
