import {Component, OnInit} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login-bar',
  templateUrl: './login-bar.component.html',
  styleUrls: ['./login-bar.component.css']
})
export class LoginBarComponent implements OnInit {

  loginStatus = false;
  AvatarSize: 56;

  constructor(public userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.checkLoginStatus();
  }

  buttonPost() {
    this.userService.login({username: '1', password: '2'});
    console.log(1);
  }

  userIcon(): string {
    return this.userService.avatarUrl;
  }

  checkLoginStatus() {
    this.loginStatus = this.userService.status;
  }

  TestLogin(): void {
    console.log(10);
    // this.loginStatus = true;
    console.log(11);
    this.router.navigate(['/login']);
  }

  TestLogout() {
    this.loginStatus = false;
  }

  TestRegister() {
    this.router.navigate(['/register']);
  }
}
