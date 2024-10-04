import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAgendasComponent } from './view-agendas/view-agendas.component';
import { TableAgendasComponent } from './table-agendas/table-agendas.component';
import { AddFormAgendasComponent } from './add-form-agendas/add-form-agendas.component';
import { EditFormAgendasComponent } from './edit-form-agendas/edit-form-agendas.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ViewAgendasComponent,
    TableAgendasComponent,
    AddFormAgendasComponent,
    EditFormAgendasComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ViewAgendasComponent
  ]
})
export class AgendasModule { }
