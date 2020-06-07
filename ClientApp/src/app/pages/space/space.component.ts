import {Component, NgModule, OnInit} from '@angular/core';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.css']
})
export class SpaceComponent implements OnInit {
  Content = 'Content';

  user_name:string = '';

  constructor() {
  }

  ngOnInit() {
    this.get_user_name();
  }

  get_user_name () {
    // TODO 获取用户名的方法
    this.user_name = 'test_name';
  }
  // TODO 获取各种用户数据
}
