import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {UserInfo} from '../../model/user-info';
import {Router} from '@angular/router';
import { IdentityService } from 'src/app/services/identity/identity.service';

@Component({
  selector: 'app-user-hover',
  templateUrl: './user-hover.component.html',
  styleUrls: ['./user-hover.component.css']
})
export class UserHoverComponent implements OnInit {
  @Input()
  username: string;

  userInfo: UserInfo;

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
    this.userInfo = await this.userService.getUserInfo(this.username);
  }

  toSpace() {
    this.router.navigate(['/space/' + this.username]).then();
  }

  banUser(targetname:string) {
    let res:boolean;
    res = this.userService.banUser(targetname);
    if (res) {
      alert("禁言成功");
    }
    else {
      alert("禁言失败");
    }
  }
}
