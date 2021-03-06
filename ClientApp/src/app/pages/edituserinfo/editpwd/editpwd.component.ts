import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-editpwd',
  templateUrl: './editpwd.component.html',
  styleUrls: ['./editpwd.component.css']
})
export class EditpwdComponent implements OnInit {

  validateForm: FormGroup;

  submitForm(value: { password: string; confirm: string; }): void {
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

  validateConfirmPassword(): void {
    setTimeout(() => this.validateForm.controls.confirm.updateValueAndValidity());
  }

  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      password: ['', [Validators.required]],
      confirm: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

}
