import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewPersonalComponent } from './view-personal/view-personal.component';
import { AddFormPersonalComponent } from './add-form-personal/add-form-personal.component';
import { EditFormPersonalComponent } from './edit-form-personal/edit-form-personal.component';
import { TabkePersonalComponent } from './tabke-personal/tabke-personal.component';
import { FormsModule } from '@angular/forms';
import { ItemPersonalComponent } from './item-personal/item-personal.component';



@NgModule({
  declarations: [
    ViewPersonalComponent,
    AddFormPersonalComponent,
    EditFormPersonalComponent,
    TabkePersonalComponent,
    ItemPersonalComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ViewPersonalComponent
  ]
})
export class PersonalModule { }
