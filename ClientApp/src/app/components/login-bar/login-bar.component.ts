import {Component, OnInit} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {UserService} from '../../services/user/user.service';
import {UserInfo} from '../../model/user-info';
import {IdentityService} from '../../services/identity/identity.service';

@Component({
  selector: 'app-login-bar',
  templateUrl: './login-bar.component.html',
  styleUrls: ['./login-bar.component.css']
})
export class LoginBarComponent implements OnInit {

  AvatarSize: 56;


  constructor(public userService: UserService, protected router: Router, public identityService: IdentityService) {
  }

  ngOnInit() {

  }

  toLogin() {
    this.router.navigate(['/login']).then();
  }

  toRegister() {
    this.router.navigate(['/register']).then();
  }


}
