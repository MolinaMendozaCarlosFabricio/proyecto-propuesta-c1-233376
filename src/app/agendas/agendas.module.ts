import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAgendasComponent } from './view-agendas/view-agendas.component';
import { TableAgendasComponent } from './table-agendas/table-agendas.component';
import { AddFormAgendasComponent } from './add-form-agendas/add-form-agendas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InmuebleOptionAgendaComponent } from './inmueble-option-agenda/inmueble-option-agenda.component';
import { ColumnSalonComponent } from './column-salon/column-salon.component';
import { ColumnEventoComponent } from './column-evento/column-evento.component';
import { ColumnPersonalComponent } from './column-personal/column-personal.component';
import { ColumnInmuebleComponent } from './column-inmueble/column-inmueble.component';



@NgModule({
  declarations: [
    ViewAgendasComponent,
    TableAgendasComponent,
    AddFormAgendasComponent,
    InmuebleOptionAgendaComponent,
    ColumnSalonComponent,
    ColumnEventoComponent,
    ColumnPersonalComponent,
    ColumnInmuebleComponent,
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
