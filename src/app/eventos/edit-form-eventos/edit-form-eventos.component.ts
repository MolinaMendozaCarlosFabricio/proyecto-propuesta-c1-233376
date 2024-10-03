import { Component } from '@angular/core';
import { EntityEventos } from '../interface/entity-eventos';
import { ViewEventosComponent } from '../view-eventos/view-eventos.component';

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

  constructor(private viewEventosComponent: ViewEventosComponent) {}

  searchEvento () : void {
    const list_eventos = localStorage.getItem("list_eventos");
    let list_search_eventos = list_eventos ? JSON.parse(list_eventos) : [];
     
    for(let i = 0; i < list_search_eventos.length; i++){
      const evento : EntityEventos = list_search_eventos[i];
      if(this.id_search == evento.id_evento){
        this.editEvent = evento;
        console.log("Evento is found");
        this.event_is_found = true;
        i = list_search_eventos.length + 1;
      }  
    }
    
  }
  
  edit_evento (): void{
    const edir_another_evento: EntityEventos = {
      id_evento: this.editEvent.id_evento,
      nombre_reservador: this.editEvent.nombre_reservador,
      apellido_reservador: this.editEvent.apellido_reservador,
      correo_reservador: this.editEvent.correo_reservador,
      telefono_reservador: this.editEvent.telefono_reservador,
      giro_evento: this.editEvent.giro_evento,
      estado_evento: this.editEvent.estado_evento,
      cantidad_invitados_evento: this.editEvent.cantidad_invitados_evento,
      costo_evento: this.editEvent.costo_evento,
    }
    const list_eventos = localStorage.getItem("list_eventos");
    let list_search_eventos = list_eventos ? JSON.parse(list_eventos) : [];
    for(let i = 0; i < list_search_eventos.length; i++){ 
      const searching_evento : EntityEventos = list_search_eventos[i]
      console.log(edir_another_evento.id_evento, "=?", searching_evento.id_evento);
      if(edir_another_evento.id_evento == searching_evento.id_evento){
        list_search_eventos.splice(i, 1);
        list_search_eventos.push(edir_another_evento);
        localStorage.setItem("list_eventos", JSON.stringify(list_search_eventos));
        console.log("Evento was edited");
        i = list_search_eventos.length + 1;
      }
    }
    this.editEvent.id_evento = 0;
    this.editEvent.nombre_reservador = "";
    this.editEvent.apellido_reservador = "";
    this.editEvent.correo_reservador = "";
    this.editEvent.telefono_reservador = "";
    this.editEvent.giro_evento = "";
    this.editEvent.estado_evento = "";
    this.editEvent.cantidad_invitados_evento = 0;
    this.editEvent.costo_evento = 0;
    this.event_is_found = false

    this.viewEventosComponent.refresh_table();
    this.viewEventosComponent.close_edit_event();
  }
}
