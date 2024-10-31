import { Component } from '@angular/core';
import { EntityEventos } from '../interface/entity-eventos';
import { ViewEventosComponent } from '../view-eventos/view-eventos.component';
import { ListEventosService } from '../services/list-eventos.service';

@Component({
  selector: 'app-edit-form-eventos',
  templateUrl: './edit-form-eventos.component.html',
  styleUrl: './edit-form-eventos.component.css'
})
export class EditFormEventosComponent {
  editEvent : EntityEventos = {
    id_evento: 0,
    nombre_reservador: "",
    apellido_reservador: "",
    correo_reservador: "",
    telefono_reservador: "",
    giro_evento: "",
    estado_evento: "",
    cantidad_invitados_evento: 0,
    costo_evento: 0,
  }

  options: string[] = ["Pendiente", "En curso", "Finalizado"]

  id_search: number = 0;

  event_is_found: boolean = false;

  dont_exists: boolean = false;

  constructor(private viewEventosComponent: ViewEventosComponent, private listEventosServices: ListEventosService) {}

  searchEvento () : void {
    this.editEvent = this.listEventosServices.getEventoById(this.id_search);
    if(this.editEvent == null)
      this.dont_exists = true;
    else
      this.event_is_found = true;
  }
  
  edit_evento (): void{
    this.listEventosServices.editEvento(this.editEvent);
    this.editEvent = {
      id_evento: 0,
      nombre_reservador: "",
      apellido_reservador: "",
      correo_reservador: "",
      telefono_reservador: "",
      giro_evento: "",
      estado_evento: "",
      cantidad_invitados_evento: 0,
      costo_evento: 0,
    }

    this.viewEventosComponent.close_edit_event();
    this.viewEventosComponent.ngOnInit();
  }
}
