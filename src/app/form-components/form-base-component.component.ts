import {Component, Input} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-base',
  template: ``
})
export class FormBaseComponent {
  @Input() form: FormGroup;
  @Input() question: any;
}
