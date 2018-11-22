import { Component, OnInit, Input, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputTextComponent } from 'src/app/form-components/input-text/input-text.component';
import { CheckboxComponent } from 'src/app/form-components/checkbox/checkbox.component';
import { FormBaseComponent } from 'src/app/form-components/form-base-component.component';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.scss']
})
export class FormItemComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() question: any;
  @ViewChild('container', {read: ViewContainerRef}) private container: ViewContainerRef;

  readonly templateMapper = {
    formTextInput: InputTextComponent,
    formCheckbox: CheckboxComponent
  };

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.container.clear();
    const componentRef = this.container.createComponent(
      this.componentFactoryResolver.resolveComponentFactory(this.templateMapper[this.question.componentType])
    );
    (<FormBaseComponent>componentRef.instance).form = this.form;
    (<FormBaseComponent>componentRef.instance).question = this.question;
  }
}
