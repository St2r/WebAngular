import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Observable, Observer} from 'rxjs';
import {NzModalService} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {UserService} from '../../services/user/user.service';
import {CookieService} from 'ngx-cookie-service';
import {IdentityService} from '../../services/identity/identity.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  validateForm: FormGroup;
  registerStatus: number;

  async submitForm(value: { username: string; email: string; password: string; confirm: string }) {
    for (const key of Object.keys(this.validateForm.controls)) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    // 注册成功之后自动登陆
    const registerResult = await this.identityService.register(value.username, value.password, value.email);
    if (registerResult) {
      await this.identityService.login(value.username, value.password, false);
      this.router.navigate(['/home']).then();
    } else {
      this.fail_register();
    }
  }

  validateConfirmPassword(): void {
    setTimeout(() => this.validateForm.controls.confirm.updateValueAndValidity());
  }

  // 向后端请求验证用户名是否已被占用
  userNameAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      this.identityService.requestCheckUsername(control.value).subscribe(
        result => {
          if (result[0]) {
            observer.next({error: true, duplicated: true});
          } else {
            observer.next(null);
          }
          observer.complete();
        }
      );
    })

  // 向后端请求验证邮箱是否已被占用
  emailAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      this.identityService.requestCheckEmail(control.value).subscribe(
        result => {
          if (result[0]) {
            observer.next({error: true, duplicated: true});
          } else {
            observer.next(null);
          }
          observer.complete();
        }
      );
    })

  // 判断验证密码和密码是否相同
  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return {error: true, required: true};
    } else if (control.value !== this.validateForm.controls.password.value) {
      return {confirm: true, error: true};
    }
    return {};
  }

  // 注册失败用于弹出modal
  fail_register(): void {
    this.modal.error({
      nzTitle: '注册失败',
      nzContent: '服务器可能出现了些故障...'
    });
  }

  // 注册成功但是登陆失败
  fail_login(): void {
    this.modal.error({
      nzTitle: '注册成功但登陆失败',
      nzContent: '服务器可能出现了些故障...'
    });
  }

  constructor(private fb: FormBuilder, private userService: UserService,
              private modal: NzModalService, private router: Router,
              private cookie: CookieService, private identityService: IdentityService) {
    this.validateForm = this.fb.group({
      username: ['', [Validators.required], [this.userNameAsyncValidator]],
      email: ['', [Validators.email, Validators.required], [this.emailAsyncValidator]],
      password: ['', [Validators.required]],
      confirm: ['', [this.confirmValidator]]
    });
  }

  ngOnInit(): void {
    this.registerStatus = 0;
  }
}
