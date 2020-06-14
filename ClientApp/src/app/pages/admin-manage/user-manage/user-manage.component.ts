import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/model/user-info';
import {AdminService} from '../../../services/admin.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.css']
})
export class UserManageComponent implements OnInit {
  user_list: UserInfo[];

  constructor(private adminService: AdminService, private userService:UserService, private router:Router) { }

  ngOnInit() {
    this.loadUserInfo().then();
  }

  // 获取数据
  async loadUserInfo() {
    this.user_list = await this.adminService.getAllUser();
  }

  toSpace() {
    console.log(this.userService.logged);
    console.log(this.userService.username);
    console.log(this.userService.userInfo);
    this.router.navigate(['/my-space/' + this.userService.username]).then();
  }

}
