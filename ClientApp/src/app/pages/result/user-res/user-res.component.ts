import { Component, OnInit, Input } from '@angular/core';
import { UserInfo } from 'src/app/model/user-info';

@Component({
  selector: 'app-user-res',
  templateUrl: './user-res.component.html',
  styleUrls: ['./user-res.component.css']
})
export class UserResComponent implements OnInit {
  @Input() search_content:string;

  user_list:UserInfo[];

  constructor() { }

  ngOnInit() {
  }

  // TODO 获取数据
  loadUserInfo() {

  }

}
