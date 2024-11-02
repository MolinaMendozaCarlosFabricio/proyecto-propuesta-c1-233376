import { Component, Input, OnInit } from '@angular/core';
import { EntityEventos } from '../../eventos/interface/entity-eventos';
import { ListEventosService } from '../../eventos/services/list-eventos.service';

@Component({
  selector: 'app-column-evento',
  templateUrl: './column-evento.component.html',
  styleUrl: './column-evento.component.css'
})
export class ColumnEventoComponent implements OnInit{
  constructor(private listEventosServices: ListEventosService){}

  @Input() id_evento: number = 0;

  @Input() dateEvento: Date = new Date();
  actualDate: Date = new Date();

  evento: EntityEventos = {
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

  ngOnInit(): void {
      this.evento = this.listEventosServices.getEventoById(this.id_evento);

      if(this.dateEvento < this.actualDate)
        this.listEventosServices.finishEvento(this.evento.id_evento);
  }
}
