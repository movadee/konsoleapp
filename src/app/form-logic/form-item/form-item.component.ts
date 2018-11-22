import { Component, OnInit, Input, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputTextComponent } from 'src/app/form-components/input-text/input-text.component';
import { CheckboxComponent } from 'src/app/form-components/checkbox/checkbox.component';
import { FormTemplateBaseComponent } from 'src/app/form-components/form-component-base.component';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.scss']
})
export class FormItemComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('group') public heroForm: FormGroup;
  @Input() data: any;
  @ViewChild('container', {read: ViewContainerRef}) private container: ViewContainerRef;

  readonly templateMapper = {
    formTextInput: InputTextComponent,
    formCheckbox: CheckboxComponent
  };

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.getComponentForCardType(this.data.componentType));
    const viewContainerRef = this.container;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<FormTemplateBaseComponent>componentRef.instance).data = this.data;
    (<FormTemplateBaseComponent>componentRef.instance).group = this.heroForm;
  }

  private getComponentForCardType(componentType) {
    return this.templateMapper[componentType];
  }


}
