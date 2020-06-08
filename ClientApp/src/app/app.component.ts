import {Component, Input} from '@angular/core';
import {UserService} from './services/user.service';

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

  constructor(private userService: UserService) {
  }

  inputValue?: string;
  optionGroups: any[] = [];

  onChange(value: string): void {
    console.log(value);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.optionGroups = [
        {
          title: '话题',
          children: [
            {
              title: 'AntDesign',
              count: 10000
            },
            {
              title: 'AntDesign UI',
              count: 10600
            }
          ]
        },
        {
          title: '问题',
          children: [
            {
              title: 'AntDesign UI 有多好',
              count: 60100
            },
            {
              title: 'AntDesign 是啥',
              count: 30010
            }
          ]
        },
        {
          title: '文章',
          children: [
            {
              title: 'AntDesign 是一个设计语言',
              count: 100000
            }
          ]
        }
      ];
    }, 1000);
  }

}
