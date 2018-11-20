import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule, MatCardModule, MatInputModule} from '@angular/material';

import { FormLogicComponent, FormItemComponent } from './form-logic/form-logic.component';
import { CheckboxComponent } from './form-components/checkbox/checkbox.component';
import { InputTextComponent } from './form-components/input-text/input-text.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormTemplateBaseComponent } from './form-components/form-component-base.component';
import { OnCreateDirective } from './on-create.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormLogicComponent,
    CheckboxComponent,
    InputTextComponent,
    FormTemplateBaseComponent,
    InputTextComponent,
    CheckboxComponent,
    FormItemComponent,
    OnCreateDirective,
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
