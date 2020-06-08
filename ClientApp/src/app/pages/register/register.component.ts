import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Observable, Observer} from 'rxjs';
import {NzModalService} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  validateForm: FormGroup;
  registerStatus: number;

  submitForm(value: { userName: string; email: string; password: string; confirm: string }): void {
    for (const key of Object.keys(this.validateForm.controls)) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    // todo 注册成功之后自动登陆
    new Observable((observer: Observer<boolean>) => {
      this.userService.register(value).subscribe(result => {
        observer.next(result[0]);
        observer.complete();
      }, () => {
        this.fail();
        observer.complete();
      });
    }).subscribe(result => {
      if (result) {
        this.registerStatus = 1;
        this.userService.login({username: value.userName, password: value.password});
      } else {
        this.fail();
      }
    }, error => this.fail());
  }

  validateConfirmPassword(): void {
    setTimeout(() => this.validateForm.controls.confirm.updateValueAndValidity());
  }

  // 向后端请求验证用户名是否已被占用
  userNameAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      this.userService.checkUsername(control.value).subscribe(
        result => {
          if (result[0]) {
            observer.next({error: true, duplicated: true});
          } else {
            observer.next(null);
          }
          observer.complete();
        }
      );
    });

  // 向后端请求验证邮箱是否已被占用
  emailAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      this.userService.checkEmail(control.value).subscribe(
        result => {
          if (result[0]) {
            observer.next({error: true, duplicated: true});
          } else {
            observer.next(null);
          }
          observer.complete();
        }
      );
    });

  // 判断验证密码和密码是否相同
  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return {error: true, required: true};
    } else if (control.value !== this.validateForm.controls.password.value) {
      return {confirm: true, error: true};
    }
    return {};
  };

  // 注册失败用于弹出modal
  fail(): void {
    this.modal.error({
      nzTitle: '注册失败',
      nzContent: '服务器可能出现了些故障...'
    });
  }

  constructor(private fb: FormBuilder, private userService: UserService,
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
