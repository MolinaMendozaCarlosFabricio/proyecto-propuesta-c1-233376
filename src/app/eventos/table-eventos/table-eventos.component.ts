import { Component, Input, OnInit } from '@angular/core';
import { EntityEventos } from '../interface/entity-eventos';
import { ListEventosService } from '../services/list-eventos.service';

@Component({
  selector: 'app-table-eventos',
  templateUrl: './table-eventos.component.html',
  styleUrl: './table-eventos.component.css'
})
export class TableEventosComponent{

  @Input() eventos: EntityEventos[] = [];

  constructor(private listEventosServices: ListEventosService){}

  cancel_eventos (delete_this : number): void {
    this.listEventosServices.cancelEvento(delete_this).subscribe(
      response => console.log("Respuesta del server:", response),
      error => console.log("Error:", error)
    );
  }

}
