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

  constructor(private userService: UserService, private router: Router) {
    if (!this.userService.logged) {
      console.log('not login in');
      // todo 为了调试方便
      // this.router.navigate(['/404']).then();
    }
  }

  ngOnInit() {
    this.loadUserInfo();
  }

  loadUserInfo() {
  }

  modifyGreeting() {
    if (this.userInfo.brief === '') {
      this.userInfo.brief = 'ta 比较懒还没有说明';
    }
  }
}
