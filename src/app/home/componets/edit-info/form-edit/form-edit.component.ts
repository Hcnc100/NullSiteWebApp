import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {

  readonly maxLengthName = 50;
  readonly maxLengthProfession = 100;
  readonly maxLengthDescription = 250;
  formInfo: FormGroup;

  constructor() {
    this.formInfo = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(this.maxLengthName)
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(this.maxLengthDescription)]),
      profession: new FormControl('', [
        Validators.required,
        Validators.maxLength(this.maxLengthProfession)]),
    })
  }

  ngOnInit(): void {
  }

}
