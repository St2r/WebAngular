import {Component, Input, OnInit} from '@angular/core';
import {UserInfo} from '../../../model/user-info';
import { UserPrivateInfo } from 'src/app/model/user-private-info';

@Component({
  selector: 'app-side-user',
  templateUrl: './side-user.component.html',
  styleUrls: ['./side-user.component.css']
})
export class SideUserComponent implements OnInit {
  @Input() userInfo;
  @Input() viewing_own_page;

  constructor() { }

  ngOnInit() {
  }

}
