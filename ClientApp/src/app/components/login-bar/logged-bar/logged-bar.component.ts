import {Component, Input, OnInit} from '@angular/core';
import {IdentityService} from '../../../services/identity/identity.service';
import {Router} from '@angular/router';
import {UserBaseInfo} from '../../../model/user-base-info';
import {UserDetailInfo} from '../../../model/user-detail-info';
import {UserService} from '../../../services/user/user.service';

@Component({
  selector: 'app-logged-bar',
  templateUrl: './logged-bar.component.html',
  styleUrls: ['./logged-bar.component.css']
})
export class LoggedBarComponent implements OnInit {
  @Input()
  username: string;

  AvatarSize: 56;
  userBaseInfo: UserBaseInfo;
  userDetailInfo: UserDetailInfo;
  loading: boolean;
  constructor(public identityService: IdentityService, private router: Router, private userService: UserService) {
    this.loading = true;
  }

  ngOnInit() {
    this.loadUserInfo().then(
      () => this.loading = false
    );
  }

  toSpace() {
    this.router.navigate(['/my-space/' + this.identityService.username]).then();
  }

  logout() {
    this.identityService.logout().then(
      () => this.router.navigate(['/home']).then()
    );
  }

  async loadUserInfo() {
    this.userBaseInfo = await this.userService.getBaseInfo(this.identityService.username);
    this.userDetailInfo = await this.userService.getDetailInfo(this.identityService.username);
  }
}
