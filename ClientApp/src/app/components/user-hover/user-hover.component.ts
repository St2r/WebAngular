import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
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

  constructor(private userService: UserService, private router: Router) {
    this.userInfo = new class implements UserInfo {
      level: number;
      articles: number;
      avatarUrl: string;
      brief: string;
      browse: number;
      fans: number;
      follow: number;
      isFan: boolean;
      isFollowed: boolean;
      like: number;
      nickname: string;
      point: number;
      star: number;
      username: string;
      loginCount: number;
      birthday: string;
      registerData: string;
    };
  }

  ngOnInit() {
    this.userService.requestUserInfo(this.username).subscribe(
      result => {
        this.userInfo = result[0];
      }
    );
  }

  toSpace() {
    this.router.navigate(['/space/' + this.username]);
  }
}
