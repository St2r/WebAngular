import {Component, Input, OnInit} from '@angular/core';
import {UserInfo} from '../../../model/user-info';

@Component({
  selector: 'app-side-user',
  templateUrl: './side-user.component.html',
  styleUrls: ['./side-user.component.css']
})
export class SideUserComponent implements OnInit {
  @Input()
  userInfo: UserInfo;

  @Input()
  ownPage: boolean;

  constructor() {
  }

  ngOnInit() {
  }
}
