import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editbasicinfo',
  templateUrl: './editbasicinfo.component.html',
  styleUrls: ['./editbasicinfo.component.css']
})
export class EditbasicinfoComponent implements OnInit {

  validateForm: FormGroup;

  constructor() { }

  ngOnInit() {
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
