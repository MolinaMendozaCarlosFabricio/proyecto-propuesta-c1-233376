import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewEventosComponent } from './view-eventos/view-eventos.component';
import { TableEventosComponent } from './table-eventos/table-eventos.component';
import { AddFormEventosComponent } from './add-form-eventos/add-form-eventos.component';
import { EditFormEventosComponent } from './edit-form-eventos/edit-form-eventos.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ViewEventosComponent,
    TableEventosComponent,
    AddFormEventosComponent,
    EditFormEventosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ViewEventosComponent
  ]
})
export class EventosModule { }
