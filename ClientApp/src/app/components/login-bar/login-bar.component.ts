import {Component, OnInit} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {UserService} from '../../services/user.service';
import {UserInfo} from '../../model/user-info';

@Component({
  selector: 'app-login-bar',
  templateUrl: './login-bar.component.html',
  styleUrls: ['./login-bar.component.css']
})
export class LoginBarComponent implements OnInit {

  AvatarSize: 56;

  userInfo: UserInfo;

  constructor(public userService: UserService, private router: Router) {
  }

  ngOnInit() {

  }

  toLogin() {
    this.router.navigate(['/login']).then();
  }

  toRegister() {
    this.router.navigate(['/register']).then();
  }

  toSpace() {
    console.log(this.userService.status);
    console.log(this.userService.username);
    console.log(this.userService.userInfo);
    this.router.navigate(['/my-space/' + this.userService.username]).then();
  }

  logout() {
    this.userService.requestLogout().subscribe(
      result => {
        if (result[0]) {
          this.userService.afterLogout();
          this.router.navigate(['/home']).then();
        }
      }
    );
  }

}
