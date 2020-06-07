import {Component, NgModule, OnInit} from '@angular/core';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.css']
})
export class SpaceComponent implements OnInit {
  Content = 'Content';

  user_name:string = '';

  basic_info:any = {
    gender: '男',
    birthdate: '1900-01-01',
  }

  last_login:String = '2018-04-24 18:00:00';
  this_login:String = '2019-04-24 18:00:00';

  contact_info:any = {
    mail: '-',
    phone_number: '114514',
  }

  self_intro:String = '';

  tabs:any = [
    {
      no: 1,
      title: '个人资料',
    },
    {
      no: 2,
      title: '我的关注'
    }
  ]

  constructor() {
  }

  ngOnInit() {
    this.get_user_info();
  }

  get_user_info () {
    // TODO 获取各种用户数据
    this.user_name = 'test_name';
  }

}
