import { Component, OnInit, Input } from '@angular/core';
import {UserInfo} from '../../../../model/user-info';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-follow-me',
  templateUrl: './follow-me.component.html',
  styleUrls: ['./follow-me.component.css']
})
export class FollowMeComponent implements OnInit {
  @Input() targetName: string;

  follow_me: UserInfo[];

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.loadFollowMe();
  }

  loadFollowMe() {
    // this.follow_me = [
    //   new class implements UserInfo {
    //     username = 'my login name';
    //     nickname = 'test_name';
    //     avatarUrl = 'fack url';
    //     brief = '';
    //     follow = 1;
    //     fans = 1000;
    //     level = 1;
    //     articles = 9;
    //     point = 500;
    //     browse = 20000;
    //     like = 100;
    //     star = 100;
    //     isFollowed = false;
    //     isFan = false;
    //   },
    //   new class implements UserInfo {
    //     username = 'my login name';
    //     nickname = 'test_name';
    //     avatarUrl = 'fack url';
    //     brief = '';
    //     follow = 1;
    //     fans = 1000;
    //     point = 500;
    //     level = 10;
    //     articles = 19;
    //     browse = 20000;
    //     like = 100;
    //     star = 100;
    //     isFollowed = false;
    //     isFan = false;
    //   },
    //   new class implements UserInfo {
    //     username = 'my login name';
    //     nickname = 'test_name';
    //     avatarUrl = 'fack url';
    //     brief = '';
    //     follow = 1;
    //     fans = 1000;
    //     point = 500;
    //     browse = 20000;
    //     level = 2;
    //     articles = 5;
    //     like = 100;
    //     star = 100;
    //     isFollowed = false;
    //     isFan = false;
    //   },
    // ]
    this.userService.requestFanList(this.targetName).subscribe(
      fan => this.follow_me=fan
    )
  }

}
