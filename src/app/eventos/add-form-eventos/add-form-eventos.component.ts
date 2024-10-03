import { Component } from '@angular/core';
import { ViewEventosComponent } from '../view-eventos/view-eventos.component';
import { EntityEventos } from '../interface/entity-eventos';

@Component({
  selector: 'app-add-form-eventos',
  templateUrl: './add-form-eventos.component.html',
  styleUrl: './add-form-eventos.component.css'
})
export class AddFormEventosComponent {
  newEvento : EntityEventos = {
    id_evento: 0,
    nombre_reservador: "",
    apellido_reservador: "",
    correo_reservador: "",
    telefono_reservador: "",
    giro_evento: "",
    estado_evento: "Pendiente",
    cantidad_invitados_evento: 0,
    costo_evento: 0,
  }

  constructor(private viewEventosComponent: ViewEventosComponent) {}

  add_evento (): void{
    const add_another_evento: EntityEventos = {
      id_evento: this.newEvento.id_evento,
      nombre_reservador: this.newEvento.nombre_reservador,
      apellido_reservador: this.newEvento.apellido_reservador,
      correo_reservador: this.newEvento.correo_reservador,
      telefono_reservador: this.newEvento.telefono_reservador,
      giro_evento: this.newEvento.giro_evento,
      estado_evento: this.newEvento.estado_evento,
      cantidad_invitados_evento: this.newEvento.cantidad_invitados_evento,
      costo_evento: this.newEvento.costo_evento
    }
    const list_eventos = localStorage.getItem("list_eventos");
    if (!list_eventos){
      let new_list_eventos: EntityEventos [] = [];
      new_list_eventos.push(add_another_evento);

      localStorage.setItem("list_eventos", JSON.stringify(new_list_eventos));
    } else {
      let new_list_eventos: EntityEventos[] = JSON.parse(list_eventos); 
      add_another_evento.id_evento = new_list_eventos.length + 1;
      new_list_eventos.push(add_another_evento);
      localStorage.setItem("list_eventos", JSON.stringify(new_list_eventos));
    }
    this.newEvento.id_evento = 0;
    this.newEvento.nombre_reservador = "";
    this.newEvento.apellido_reservador = "";
    this.newEvento.correo_reservador = "";
    this.newEvento.telefono_reservador = "";
    this.newEvento.giro_evento = "";
    this.newEvento.cantidad_invitados_evento = 0;
    this.newEvento.costo_evento = 0;

    this.viewEventosComponent.refresh_table();
    this.viewEventosComponent.close_add_event();
  }
}