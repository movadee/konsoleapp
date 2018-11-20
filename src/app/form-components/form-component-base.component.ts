import {Component, Input} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-template-base',
  template: ``
})
export class FormTemplateBaseComponent {
  @Input() data: any;
  @Input() group: FormGroup;
}
