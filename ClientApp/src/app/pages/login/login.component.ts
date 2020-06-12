import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  loginStatus: number;

  submitForm(): void {
    for (const i of Object.keys(this.validateForm.controls)) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.userService.login(this.validateForm.value).subscribe(
      result => {
        if (result[0]) {
          this.userService.afterLogin(this.validateForm.value['username']);
          this.validateForm.reset();
        } else {
          this.fail();
          this.validateForm.reset();
        }
      }
    );
  }

  constructor(private fb: FormBuilder, public router: Router, public userService: UserService,
              private modal: NzModalService) {
  }

  ngOnInit(): void {
    // todo 对已登陆的用户来说，不应该让其再登陆
    this.loginStatus = 0;
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [false, null]
    });
  }

  fail(): void {
    this.modal.error({
      nzTitle: '登陆失败',
      nzContent: '请检查用户名和密码'
    });
  }
}
