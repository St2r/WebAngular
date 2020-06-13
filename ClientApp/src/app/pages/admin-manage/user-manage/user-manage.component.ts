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
      new class implements UserInfo {
        // 用户名
        username: 'test';
        // 昵称
        nickname: 'test';
        // 头像地址
        avatarUrl: 'fake';
        // 个人简介
        brief: 'test';
  
        // 我的关注数
        follow: 2;
        // 我的粉丝数
        fans: 2;
        // 用户登级
        level: 2;
        // 个人积分
        point: 2;
        // 用户发的帖子数量
        articles: 2;
        // 帖子被浏览数
        browse: 2;
        // 帖子被点赞数
        like: 2;
        // 帖子被收藏数
        star: 2;
  
        // 该用户被登陆用户关注
        isFollowed: true;
        // 该用户关注了登陆用户
        isFan: false;
      }
    ] 
    
  }

}
