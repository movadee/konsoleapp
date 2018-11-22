import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule, MatInputModule} from '@angular/material';

import { CheckboxComponent } from './form-components/checkbox/checkbox.component';
import { InputTextComponent } from './form-components/input-text/input-text.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormBaseComponent } from './form-components/form-base-component.component';
import { FormComponent } from './form-logic/form/form.component';
import { FormItemComponent } from './form-logic/form-item/form-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxComponent,
    InputTextComponent,
    FormBaseComponent,
    InputTextComponent,
    CheckboxComponent,
    FormItemComponent,
    FormComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ InputTextComponent, CheckboxComponent ]
})
export class AppModule { }
