import { Component, Input } from '@angular/core';
import { ViewEventosComponent } from '../view-eventos/view-eventos.component';
import { EntityEventos } from '../interface/entity-eventos';
import { ListEventosService } from '../services/list-eventos.service';

@Component({
  selector: 'app-add-form-eventos',
  templateUrl: './add-form-eventos.component.html',
  styleUrl: './add-form-eventos.component.css'
})
export class AddFormEventosComponent {
  @Input() new_id_evento: number = 0;

  get_new_id_evento: number = 0;

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

  open_this_form: boolean = true;

  open_agendar: boolean = false; //cambiar

  constructor(private listEventosServices: ListEventosService, private viewEventosComponent: ViewEventosComponent) {}

  add_evento (): void{
    this.get_new_id_evento = this.new_id_evento;
    this.newEvento.id_evento = this.new_id_evento;
    this.listEventosServices.addEvento(this.newEvento);
    this.newEvento = {
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

    this.open_agendar = true;
    this.open_this_form = false;
  }
}