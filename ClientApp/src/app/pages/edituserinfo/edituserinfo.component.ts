import {Component, OnInit} from '@angular/core';
import {UserInfo} from '../../model/user-info';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edituserinfo',
  templateUrl: './edituserinfo.component.html',
  styleUrls: ['./edituserinfo.component.css']
})
export class EdituserinfoComponent implements OnInit {
  loading: boolean;

  userInfo: UserInfo;

  constructor(private userService: UserService, private router: Router) {
    this.loading = false;
    if (!this.userService.logged) {
      this.router.navigate(['/404']).then();
    }
  }

  ngOnInit() {
    this.loadUserInfo().then(
      () => {
        this.loading = false;
        this.modifyGreeting();
      }
    );
  }

  async loadUserInfo() {
    this.userInfo = await this.userService.getLoggedUserInfo();
  }

  modifyGreeting() {
    if (this.userInfo.brief === '') {
      this.userInfo.brief = 'ta 比较懒还没有说明';
    }
  }
}
