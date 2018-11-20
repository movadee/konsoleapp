import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef, ComponentRef, ComponentFactory, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { FormTemplateBaseComponent } from '../form-components/form-component-base.component';
import { InputTextComponent } from '../form-components/input-text/input-text.component';
import { CheckboxComponent } from '../form-components/checkbox/checkbox.component';
declare var require: any;

@Component({
  selector: 'app-form',
  templateUrl: './form-logic.component.html',
  styleUrls: ['./form-logic.component.scss']
})
export class FormLogicComponent implements OnInit, OnDestroy {

  public heroForm: FormGroup;
  public items = require('./data.json');

  @ViewChild('alertContainer', { read: ViewContainerRef }) container;
//  componentRef: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver) { }

  // test code
  readonly templateMapper = {
    formTextInput: InputTextComponent,
    formCheckbox: CheckboxComponent
  };

  createComponent(data) {
    console.log(this.container);
    if(this.container){
      this.container.clear();
  
      
      // const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(AlertComponent);
      // this.componentRef = this.container.createComponent(factory);
      // this.componentRef.instance.type = type;
      // this.componentRef.instance.output.subscribe(event => console.log(event));


      //
      const componentFactory: ComponentFactory<any> = this.resolver.resolveComponentFactory(this.getComponentForCardType(data.componentType));
      const viewContainerRef = this.container;
      // viewContainerRef.clear();
      const componentRef = viewContainerRef.createComponent(componentFactory);
      (<FormTemplateBaseComponent>componentRef.instance).data = data;
      (<FormTemplateBaseComponent>componentRef.instance).group = this.heroForm;
    }
  }

    ngOnDestroy() {
      // this.componentRef.destroy();
    }

    private getComponentForCardType(componentType) {
      return this.templateMapper[componentType];
    }

  //  test code end

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


@Component({
  selector: 'app-form-item',
  template: `<ng-container #container></ng-container>`
})
export class FormItemComponent implements OnInit {
  ngOnInit() {}
  // tslint:disable-next-line:no-input-rename
  // @Input('group') public heroForm: FormGroup;
  // @Input() data: any;
  // @ViewChild('container', {read: ViewContainerRef}) private container: ViewContainerRef;

  // readonly templateMapper = {
  //   formTextInput: InputTextComponent,
  //   formCheckbox: CheckboxComponent
  // };

  // constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  // ngOnInit() {
  //   const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.getComponentForCardType(this.data.componentType));
  //   const viewContainerRef = this.container;
  //   viewContainerRef.clear();
  //   const componentRef = viewContainerRef.createComponent(componentFactory);
  //   (<FormTemplateBaseComponent>componentRef.instance).data = this.data;
  //   (<FormTemplateBaseComponent>componentRef.instance).group = this.heroForm;
  // }

  // private getComponentForCardType(componentType) {
  //   return this.templateMapper[componentType];
  // }

}
