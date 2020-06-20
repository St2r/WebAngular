import {Component, Input} from '@angular/core';
import {UserService} from './services/user/user.service';
import {IdentityService} from './services/identity/identity.service';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isAdmin: boolean = true;
  visitAsAdmin: boolean = false;

  Subjects = [
    ['离散数学', 'discrete-math'],
    ['面向对象程序设计', 'oo-programming'],
    ['系统编程', 'system-programming']
  ];

  SchoolLife = [
    ['课程推荐', 'course-recommend'],
    ['校园周边', 'around-school']
  ];


  constructor(private userService: UserService, protected identityService: IdentityService) {
  }


  onChange(value: string): void {
    console.log(value);
  }

  // TODO 切换身份的实现
  changeMode(value:boolean) {
    alert("change");
    // location.reload();
  }
}
