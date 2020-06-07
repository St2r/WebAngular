import {Component, Input, OnInit} from '@angular/core';
import {LoginService} from '../../../services/login.service';

@Component({
  selector: 'app-tab-follow',
  templateUrl: './tab-follow.component.html',
  styleUrls: ['./tab-follow.component.css']
})
export class TabFollowComponent implements OnInit {
  @Input()
  targetUser: string;

  loginUser: string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginUser = this.loginService.getUserName();
  }

}
