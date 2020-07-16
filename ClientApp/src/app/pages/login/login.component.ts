import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../services/user/user.service';
import {NzModalService} from 'ng-zorro-antd';
import {CookieService} from 'ngx-cookie-service';
import {IdentityService} from '../../services/identity/identity.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  loginStatus: number;

  async submitForm() {
    for (const i of Object.keys(this.validateForm.controls)) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    const result = await this.identityService.login(this.validateForm.value['username'], this.validateForm.value['password'],
      this.validateForm.value['remember']);
    if (!result) {
      this.fail();
    }
  }


  constructor(private fb: FormBuilder, public router: Router, public userService: UserService,
              private modal: NzModalService, private cookie: CookieService, public identityService: IdentityService) {
    if (this.identityService.logged) {
      this.router.navigate(['/404']).then();
    }
    this.validateForm = this.fb.group({
      username: [this.cookie.get('backup_username'), [Validators.required]],
      password: ['', [Validators.required]],
      remember: [false, null]
    });
  }

  ngOnInit(): void {
    this.loginStatus = 0;
  }

  fail(): void {
    this.modal.error({
      nzTitle: '登陆失败',
      nzContent: '请检查用户名和密码'
    });
  }
}
