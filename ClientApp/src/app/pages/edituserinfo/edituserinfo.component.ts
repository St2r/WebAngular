import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {UserInfo} from '../../model/user-info';
import {UserPrivateInfo} from '../../model/user-private-info';

@Component({
  selector: 'app-edituserinfo',
  templateUrl: './edituserinfo.component.html',
  styleUrls: ['./edituserinfo.component.css']
})
export class EdituserinfoComponent implements OnInit {

  userInfo: UserInfo;

  userPrivateInfo: UserPrivateInfo;

  validateForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.loadUserInfo();
    this.loadUserPrivateInfo();
  }

  loadUserInfo() {
    this.userInfo = new class implements UserInfo {
      username = 'my login name';
      nickname = 'test_name';
      avatarUrl = 'fack url';
      brief = '';
      follow = 1;
      fans = 1000;
      point = 500;
      browse = 20000;
      like = 100;
      star = 100;
      isFollowed = false;
      isFan = false;
    };
  }

  modifyGreeting() {
    if (this.userInfo.brief == '') {
      this.userInfo.brief = 'ta 比较懒还没有说明';
    }
  }

  loadUserPrivateInfo() {
    this.userPrivateInfo = new class implements UserPrivateInfo {
      username = 'my login name';
      loginCount = 20;
      birthday = '1970-1-1';
      registerData = '1970-1-1';
    };
  }

  submitForm(value: { userName: string; email: string; password: string; confirm: string; comment: string }): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    console.log(value);
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

}
