import {Component, OnInit} from '@angular/core';
import {UserInfo} from '../../model/user-info';
import {UserPrivateInfo} from '../../model/user-private-info';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edituserinfo',
  templateUrl: './edituserinfo.component.html',
  styleUrls: ['./edituserinfo.component.css']
})
export class EdituserinfoComponent implements OnInit {

  userInfo: UserInfo;

  userPrivateInfo: UserPrivateInfo;

  constructor(private userService: UserService, private router: Router) {
    if (!this.userService.status) {
      console.log('not login in');
      this.router.navigate(['/404']).then();
    }
  }

  ngOnInit() {
    this.loadUserInfo();
    this.loadUserPrivateInfo();
  }

  loadUserInfo() {
    this.userInfo = new class implements UserInfo {
      username = 'my login name';
      nickname = 'test_name';
      avatarUrl = 'fack url';
      brief = '';
      follow = 1;
      fans = 1000;
      level = 5;
      point = 500;
      articles = 20;
      browse = 20000;
      like = 100;
      star = 100;
      isFollowed = false;
      isFan = false;
    };
  }

  modifyGreeting() {
    if (this.userInfo.brief === '') {
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

}
