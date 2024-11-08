import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewInmueblesComponent } from './view-inmuebles/view-inmuebles.component';
import { AddFormInmueblesComponent } from './add-form-inmuebles/add-form-inmuebles.component';
import { EditFormInmueblesComponent } from './edit-form-inmuebles/edit-form-inmuebles.component';
import { TableInmueblesComponent } from './table-inmuebles/table-inmuebles.component';
import { ItemInmueblesComponent } from './item-inmuebles/item-inmuebles.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ViewInmueblesComponent,
    AddFormInmueblesComponent,
    EditFormInmueblesComponent,
    TableInmueblesComponent,
    ItemInmueblesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    ViewInmueblesComponent,
  ]
})
export class InmueblesModule { }
