import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {UserInfo} from '../../model/user-info';
import {Router} from '@angular/router';

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

  constructor(private userService: UserService, private router: Router) {
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
}
