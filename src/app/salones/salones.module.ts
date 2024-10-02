import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewSalonesComponent } from './view-salones/view-salones.component';
import { TableSalonesComponent } from './table-salones/table-salones.component';
import { AddFormSalonesComponent } from './add-form-salones/add-form-salones.component';
import { FormsModule } from '@angular/forms';
import { EditFormSalonesComponent } from './edit-form-salones/edit-form-salones.component';



@NgModule({
  declarations: [
    ViewSalonesComponent,
    TableSalonesComponent,
    AddFormSalonesComponent,
    EditFormSalonesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ViewSalonesComponent
  ]
})
export class SalonesModule { }
