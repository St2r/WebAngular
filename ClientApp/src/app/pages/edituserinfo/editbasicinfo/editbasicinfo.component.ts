import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editbasicinfo',
  templateUrl: './editbasicinfo.component.html',
  styleUrls: ['./editbasicinfo.component.css']
})
export class EditbasicinfoComponent implements OnInit {

  validateForm: FormGroup;

  dateFormat = 'yyyy/MM/dd';

  selected_date: Date;

  current_date: Date;

  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      userName: ['', [Validators.required]],
      birthdate: ['', [Validators.required]],
      comment: ['', [Validators.required]],
      datePicker: [null]
    });
  }

  ngOnInit() {
  }

  submitForm(value: { userName: string; birthdate:Date; comment: string }): void {
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
