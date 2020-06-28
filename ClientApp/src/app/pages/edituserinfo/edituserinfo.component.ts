import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {Router} from '@angular/router';
import {IdentityService} from '../../services/identity/identity.service';
import {UserBaseInfo} from '../../model/user-base-info';

@Component({
  selector: 'app-edituserinfo',
  templateUrl: './edituserinfo.component.html',
  styleUrls: ['./edituserinfo.component.css']
})
export class EdituserinfoComponent implements OnInit {
  loading: boolean;

  userInfo: UserBaseInfo;

  constructor(private userService: UserService, private router: Router, private identityService: IdentityService) {
    this.loading = false;
    if (!this.identityService.logged) {
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
    this.userInfo = await this.userService.getBaseInfo(this.identityService.username);
  }

  modifyGreeting() {
    if (this.userInfo.brief === '') {
      this.userInfo.brief = 'ta 比较懒还没有说明';
    }
  }
}
