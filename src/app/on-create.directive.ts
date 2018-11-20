import { Directive, Output, EventEmitter, Input, SimpleChange} from '@angular/core';

@Directive({
  selector: '[onCreate]'
})
export class OnCreateDirective {

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onCreate: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
     this.onCreate.emit('dummy');
  }

}
