import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../../services/user/user.service';
import {UserBaseInfo} from '../../../../model/user-base-info';

@Component({
  selector: 'app-i-follow',
  templateUrl: './i-follow.component.html',
  styleUrls: ['./i-follow.component.css']
})
export class IFollowComponent implements OnInit {
  @Input() targetName: string;

  loading: boolean;
  myFollow: UserBaseInfo[];

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
