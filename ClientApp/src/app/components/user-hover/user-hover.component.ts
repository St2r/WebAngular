import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {Router} from '@angular/router';
import {IdentityService} from 'src/app/services/identity/identity.service';
import {UserBaseInfo} from '../../model/user-base-info';
import {UserDetailInfo} from '../../model/user-detail-info';

@Component({
  selector: 'app-user-hover',
  templateUrl: './user-hover.component.html',
  styleUrls: ['./user-hover.component.css']
})
export class UserHoverComponent implements OnInit {
  @Input()
  username: string;

  userBaseInfo: UserBaseInfo;
  userDetailInfo: UserDetailInfo;

  loading: boolean;

  constructor(private userService: UserService, private router: Router, protected identityService: IdentityService) {
    this.loading = true;
  }

  ngOnInit() {
    this.loadUserInfo().then(
      () => this.loading = false
    );
  }

  async loadUserInfo() {
    this.userBaseInfo = await this.userService.getBaseInfo(this.username);
    this.userDetailInfo = await this.userService.getDetailInfo(this.username);
  }

  toSpace() {
    this.router.navigate(['/space/' + this.username]).then();
  }

  banUser(username: string) {
    let res: boolean;
    res = this.userService.banUser(username);
    if (res) {
      alert('禁言成功');
    } else {
      alert('禁言失败');
    }
  }
}
