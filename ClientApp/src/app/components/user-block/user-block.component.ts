import {Component, Input, OnInit} from '@angular/core';
import {UserInfo} from '../../model/user-info';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-block',
  templateUrl: './user-block.component.html',
  styleUrls: ['./user-block.component.css']
})
export class UserBlockComponent implements OnInit {
  @Input()
  username: string;

  loading: boolean;

  ownPage: boolean;

  userInfo: UserInfo;

  constructor(private userService: UserService) {
    this.loading = true;
    this.ownPage = false;
  }

  ngOnInit() {
    this.loadUserInfo().then(
      () => this.checkOwnPage().then(
        () => this.loading = false
      )
    );
  }

  async checkOwnPage() {
    if (this.userService.logged) {
      if (this.userService.username === this.username) {
        this.ownPage = true;
      }
    }
    this.ownPage = false;
  }

  async loadUserInfo() {
    this.userInfo = await this.userService.getUserInfo(this.username);
  }
}
