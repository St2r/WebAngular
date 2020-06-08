import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {UserInfo} from '../../model/user-info';

@Component({
  selector: 'app-user-hover',
  templateUrl: './user-hover.component.html',
  styleUrls: ['./user-hover.component.css']
})
export class UserHoverComponent implements OnInit {
  @Input()
  username: string;

  userInfo: UserInfo;

  constructor(private userService: UserService) {
    this.userInfo = new class implements UserInfo {
      avatarUrl: string;
      birthday: string;
      brief: string;
      browse: number;
      fans: number;
      follow: number;
      like: number;
      nickname: string;
      point: number;
      registerData: string;
      star: number;
    };
  }

  ngOnInit() {
    this.userService.getUserAllInfo(this.username).subscribe(
      result => {
        this.userInfo = result[0];
      }
    );
  }

}
