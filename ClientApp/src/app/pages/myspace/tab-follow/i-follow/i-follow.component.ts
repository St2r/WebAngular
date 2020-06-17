import { Component, OnInit, Input } from '@angular/core';
import {UserInfo} from '../../../../model/user-info';
import { UserService } from '../../../../services/user/user.service';

@Component({
  selector: 'app-i-follow',
  templateUrl: './i-follow.component.html',
  styleUrls: ['./i-follow.component.css']
})
export class IFollowComponent implements OnInit {
  @Input() targetName: string;

  loading: boolean;
  myFollow: UserInfo[];

  constructor(private userService: UserService) {
    this.loading = true;
  }

  ngOnInit() {
    this.loadMyFollow().then(
      () => this.loading = false
    );
  }

  async loadMyFollow() {
    this.myFollow = await this.userService.getFollowList(this.targetName);
  }
}
