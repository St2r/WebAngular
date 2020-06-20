import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/model/user-info';
import {AdminService} from '../../../services/admin.service';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import {IdentityService} from '../../../services/identity/identity.service';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.css']
})
export class UserManageComponent implements OnInit {
  user_list: UserInfo[];

  constructor(private adminService: AdminService, private userService: UserService, private router: Router, private identityService: IdentityService) { }

  ngOnInit() {
    this.loadUserInfo().then();
  }

  // 获取数据
  async loadUserInfo() {
    this.user_list = await this.adminService.getAllUser();
  }

  toSpace() {
    this.router.navigate(['/my-space/' + this.identityService.username]).then();
  }

  // TODO 编辑用户信息
  editTargetInfo() {
    
  }

  // TODO 封禁用户
  banTargetUser() {
    alert("禁言操作");
  }

  cancel() {
    ;
  }

}
