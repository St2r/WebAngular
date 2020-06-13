import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/model/user-info';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.css']
})
export class UserManageComponent implements OnInit {
  user_list: UserInfo[];

  constructor() { }

  ngOnInit() {
    this.loadUserInfo();
  }

// TODO 获取数据
  loadUserInfo() {
    this.user_list = [
      
    ] 
    
  }

}
