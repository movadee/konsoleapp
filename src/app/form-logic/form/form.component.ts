import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
declare var require: any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public heroForm: FormGroup;
  public items = require('../data.json');

  constructor() { }

  ngOnInit() {
    this.toFormGroup(this.items);
  }

  private toFormGroup(questions) {
    let group: any = {};
    let requiredArr = [];

    questions.fields.forEach(question => {
      question.validation.forEach(item =>  {
        (item.type === 'required') ? requiredArr.push(Validators[item.type]) : requiredArr.push(Validators[item.type](item.arguments));
      });
      group[question.id] = new FormControl(question.data || '', requiredArr);
    });

    this.heroForm = new FormGroup(group);
  }


}
