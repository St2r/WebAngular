import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../../services/admin.service';
import {UserService} from 'src/app/services/user/user.service';
import {Router} from '@angular/router';
import {IdentityService} from '../../../services/identity/identity.service';
import {UserBaseInfo} from '../../../model/user-base-info';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.css']
})
export class UserManageComponent implements OnInit {
  user_list: UserBaseInfo[];

  searchContent = '';

  constructor(private adminService: AdminService, private userService: UserService,
              private router: Router, private identityService: IdentityService) {
  }

  ngOnInit() {
    this.loadUserInfo().then();
  }

  // 获取数据
  async loadUserInfo() {
    this.user_list = await this.adminService.getAllUser();
  }

  // TODO 访问目标用户主页的逻辑
  toSpace() {
    this.router.navigate(['/my-space/' + this.identityService.username]).then();
  }

  // TODO 编辑用户信息
  editTargetInfo() {

  }

  // TODO 封禁用户
  banTargetUser() {
    alert('禁言操作');
  }

  cancel() {
    return;
  }

  // TODO 搜索功能
  search() {
    alert('搜索：' + this.searchContent);
  }

}
