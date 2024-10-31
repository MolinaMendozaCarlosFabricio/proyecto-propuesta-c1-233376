import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAgendasComponent } from './view-agendas/view-agendas.component';
import { TableAgendasComponent } from './table-agendas/table-agendas.component';
import { AddFormAgendasComponent } from './add-form-agendas/add-form-agendas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InmuebleOptionAgendaComponent } from './inmueble-option-agenda/inmueble-option-agenda.component';



@NgModule({
  declarations: [
    ViewAgendasComponent,
    TableAgendasComponent,
    AddFormAgendasComponent,
    InmuebleOptionAgendaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ViewAgendasComponent,
    AddFormAgendasComponent
  ]
})
export class AgendasModule { }
