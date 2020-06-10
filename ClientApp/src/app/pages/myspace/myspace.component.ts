import {Component, Input, OnInit} from '@angular/core';
import {UserInfo} from '../../model/user-info';
import {UserPrivateInfo} from '../../model/user-private-info';
import {BlockInfo, AdminInfo} from '../../model/block-info';
import {ActivatedRoute, Params} from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-myspace',
  templateUrl: './myspace.component.html',
  styleUrls: ['./myspace.component.css']
})
export class MyspaceComponent implements OnInit {
  @Input()
  targetName: string;

  userInfo: UserInfo;

  userPrivateInfo: UserPrivateInfo;

  recent_visiter: UserInfo[];

  favor_block: BlockInfo[];

  viewing_own_page: boolean;

  constructor(private routerInfo: ActivatedRoute, private userService: UserService) {
    this.routerInfo.params.subscribe((params: Params) => {
      this.targetName = params['target'];
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
    if (!this.viewing_own_page) {
      this.addNewVisit();
    }
  }

  loadUserInfo() {
  //   this.userInfo = new class implements UserInfo {
  //     username = 'my login name';
  //     nickname = 'test_name';
  //     avatarUrl = 'fack url';
  //     brief = '';
  //     follow = 1;
  //     fans = 1000;
  //     level = 20;
  //     point = 500;
  //     articles = 20;
  //     browse = 20000;
  //     like = 100;
  //     star = 100;
  //     isFollowed = false;
  //     isFan = false;
  //   };
    this.userService.getUserInfo(this.targetName).subscribe(
      userInfo => this.userInfo = userInfo
    );
  }

  modifyGreeting() {
    if (this.userInfo.brief == '') {
      this.userInfo.brief = 'ta 比较懒还没有说明';
    }
  }

  loadUserPrivateInfo() {
    // this.userPrivateInfo = new class implements UserPrivateInfo {
    //   username = 'my login name';
    //   loginCount = 20;
    //   birthday = '1970-1-1';
    //   registerData = '1970-1-1';
    // };
    this.userService.getUserPrivateInfo(this.targetName).subscribe(
      userPrivateInfo => this.userPrivateInfo = userPrivateInfo
    );
  }

  addNewVisit() {
    this.userService.addVisitRecord(this.targetName, this.userInfo.username).subscribe();
  }

  loadVisiterInfo() {
    // this.recent_visiter = [
    //   new class implements UserInfo {
    //     username = 'login in name';
    //     nickname = 'test_name';
    //     avatarUrl = 'fack url';
    //     brief = '';
    //     follow = 1;
    //     fans = 1000;
    //     level = 100;
    //     point = 500;
    //     articles = 1;
    //     browse = 20000;
    //     like = 100;
    //     star = 100;
    //     isFollowed = false;
    //     isFan = false;
    //   },
    //   new class implements UserInfo {
    //     username = 'login in name';
    //     nickname = 'test_name 2';
    //     avatarUrl = 'fack url';
    //     brief = '';
    //     follow = 1;
    //     fans = 1000;
    //     level = 2;
    //     point = 500;
    //     articles = 4;
    //     browse = 20000;
    //     like = 100;
    //     star = 100;
    //     isFollowed = false;
    //     isFan = false;
    //   },
    //   new class implements UserInfo {
    //     username = 'login in name';
    //     nickname = 'test_name 3';
    //     avatarUrl = 'fack url';
    //     brief = '';
    //     follow = 1;
    //     fans = 1000;
    //     level = 10;
    //     point = 500;
    //     articles = 6;
    //     browse = 20000;
    //     like = 100;
    //     star = 100;
    //     isFollowed = false;
    //     isFan = false;
    //   },
    // ];
    this.userService.getRecentVisiter(this.targetName).subscribe(
      visiter => this.recent_visiter=visiter
    );
  }

  loadFavorBlockInfo() {
    // this.favor_block = [
    //   new class implements BlockInfo {
    //     avatarUrl = '';
    //     blockName = 'test name';
    //     accessRight = 2;
    //     isFollowed = true;
    //     contentTotal = 100;
    //     followTotal = 20;
    //     todayTotal = 20;
    //     admins = [
    //       new class implements AdminInfo {
    //         username = 'login name';
    //         nickname = 'admin name';
    //         avatarUrl = 'fake url';
    //         identity = 0;
    //       },
    //       new class implements AdminInfo {
    //         username = 'login name';
    //         nickname = 'admin name';
    //         avatarUrl = 'fake url';
    //         identity = 1;
    //       },
    //     ];
    //   },
    //   new class implements BlockInfo {
    //     avatarUrl = '';
    //     blockName = 'test name';
    //     accessRight = 2;
    //     isFollowed = true;
    //     contentTotal = 100;
    //     followTotal = 20;
    //     todayTotal = 10;
    //     admins = [
    //       new class implements AdminInfo {
    //         username = 'login name';
    //         nickname = 'admin name';
    //         avatarUrl = 'fake url';
    //         identity = 0;
    //       },
    //       new class implements AdminInfo {
    //         username = 'login name';
    //         nickname = 'admin name';
    //         avatarUrl = 'fake url';
    //         identity = 1;
    //       },
    //     ];
    //   },
    //   new class implements BlockInfo {
    //     avatarUrl = '';
    //     blockName = 'test name';
    //     accessRight = 2;
    //     isFollowed = true;
    //     contentTotal = 100;
    //     followTotal = 20;
    //     todayTotal = 10;
    //     admins = [
    //       new class implements AdminInfo {
    //         username = 'login name';
    //         nickname = 'admin name';
    //         avatarUrl = 'fake url';
    //         identity = 0;
    //       },
    //       new class implements AdminInfo {
    //         username = 'login name';
    //         nickname = 'admin name';
    //         avatarUrl = 'fake url';
    //         identity = 1;
    //       },
    //     ];
    //   },
    // ];
    this.userService.getFavBlock(this.targetName).subscribe(
      favorblock => this.favor_block=favorblock
    );
  }

  setViewMode() {
    if (this.targetName.localeCompare(this.userInfo.username)!=0) {
      this.viewing_own_page = false;
    }
    else {
      this.viewing_own_page = true;
    }
  }
}
