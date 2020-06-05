import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-login-bar',
  templateUrl: './login-bar.component.html',
  styleUrls: ['./login-bar.component.css']
})
export class LoginBarComponent implements OnInit {

  loginStatus = false;
  AvatarSize: 56;

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
    this.checkLoginStatus();
  }

  buttonPost() {
    this.loginService.login('1', '2');
    console.log(1);
  }

  userIcon(): string {
    return this.loginService.getUserImage();
  }

  checkLoginStatus() {
    this.loginStatus = this.loginService.isLogged();
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
