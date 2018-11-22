import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
declare var require: any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public form: FormGroup;
  public questions = require('../data.json');
  public formGroup: any = {};
  public validationArr;

  ngOnInit() {
    this.questions.fields.forEach(question => {
      this.validationArr = [];
      question.validation.forEach(item =>  {
        (item.type === 'required')
        ? this.validationArr.push(Validators[item.type])
        : this.validationArr.push(Validators[item.type](item.arguments));
      });
      this.formGroup[question.id] = new FormControl(question.data || '', this.validationArr);
    });
    this.form = new FormGroup(this.formGroup);
  }
}
