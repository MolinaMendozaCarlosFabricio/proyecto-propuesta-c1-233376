import { Component } from '@angular/core';
import { EntityAgendas } from '../interface/entity-agendas';
import { ViewAgendasComponent } from '../view-agendas/view-agendas.component';

@Component({
  selector: 'app-add-form-agendas',
  templateUrl: './add-form-agendas.component.html',
  styleUrl: './add-form-agendas.component.css'
})
export class AddFormAgendasComponent {
  newAgenda : EntityAgendas = {
    id_agenda: 0,
    id_evento: null,
    id_salon: null,
    fecha_inicio: new Date(),
    hora_inicio: new Date(),
    fecha_fin: new Date(),
    hora_fin: new Date(),
    fecha_reserva: new Date(),
  }

  constructor( private viewAgendasComponent: ViewAgendasComponent){}

  add_agenda(): void {
    //const add_another_agenda = {}
  }
}
