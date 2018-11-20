import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLogicComponent } from './form-logic.component';

describe('FormLogicComponent', () => {
  let component: FormLogicComponent;
  let fixture: ComponentFixture<FormLogicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLogicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
