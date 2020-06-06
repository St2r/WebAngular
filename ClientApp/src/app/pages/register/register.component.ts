import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Observable, Observer} from 'rxjs';
import {LoginService} from '../../services/login.service';
import {NzModalService} from 'ng-zorro-antd';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  validateForm: FormGroup;
  registerStatus: number;

  submitForm(value: { userName: string; email: string; password: string; confirm: string; comment: string }): void {
    for (const key of Object.keys(this.validateForm.controls)) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    setTimeout(() => {
      // todo http请求判断注册是否成功
      // todo 注册成功之后自动登陆
      console.log(value);
      // this.fail();
      this.registerStatus = 1;
    }, 1000);
  }

  validateConfirmPassword(): void {
    setTimeout(() => this.validateForm.controls.confirm.updateValueAndValidity());
  }

  userNameAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      // todo::向后端请求验证用户名是否已被占用
      setTimeout(() => {
        if (control.value === 'JasonWood') {
          // you have to return `{error: true}` to mark it as an error event
          observer.next({error: true, duplicated: true});
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    })

  emailAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      // todo::向后端请求验证邮箱是否已被占用
      setTimeout(() => {
        if (control.value === 'st2r@qq.com') {
          observer.next({error: true, duplicated: true});
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
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
  fail(): void {
    this.modal.error({
      nzTitle: '注册失败',
      nzContent: '服务器可能出现了些故障...'
    });
  }

  constructor(private fb: FormBuilder, private loginService: LoginService,
              private modal: NzModalService, private router: Router) {
    this.validateForm = this.fb.group({
      userName: ['', [Validators.required], [this.userNameAsyncValidator]],
      email: ['', [Validators.email, Validators.required], [this.emailAsyncValidator]],
      password: ['', [Validators.required]],
      confirm: ['', [this.confirmValidator]]
    });
  }

  ngOnInit(): void {
    this.registerStatus = 0;
  }

}
