import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  loginStatus: number;

  submitForm(): void {
    console.log(1);
    for (const i of Object.keys(this.validateForm.controls)) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.loginStatus = 1;
  }

  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    // todo 对已登陆的用户来说，不应该让其再登陆
    this.loginStatus = 0;
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [false, null]
    });
  }
}
