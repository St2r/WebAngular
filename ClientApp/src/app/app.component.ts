import {Component, Input} from '@angular/core';
import {LoginService} from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public searchContent = '';

  Subjects = [
    ['离散数学', 'discrete-math'],
    ['面向对象程序设计', 'oo-programming'],
    ['系统编程', 'system-programming']
  ];

  SchoolLife = [
    ['校卡招领', 'campus-card'],
    ['课程推荐', 'course-recommend']
  ];

  AroundCampus = [
    ['美食', 'food'],
    ['游玩', 'amusement']
  ];

  constructor() {
  }
}
