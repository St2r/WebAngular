import { Component, OnInit, Input } from '@angular/core';
import {UserInfo} from '../../../../model/user-info';
import { UserService } from '../../../../services/user/user.service';

@Component({
  selector: 'app-follow-me',
  templateUrl: './follow-me.component.html',
  styleUrls: ['./follow-me.component.css']
})
export class FollowMeComponent implements OnInit {
  @Input()
  targetName: string;

  loading: boolean;
  myFan: UserInfo[];

  constructor(private userService: UserService) {
    this.loading = true;
  }

  ngOnInit() {
    this.loadMyFan().then(
      () => this.loading = false
    );
  }

  async loadMyFan() {
    this.myFan = await this.userService.getFanList(this.targetName);
  }

}
