import { Component, OnInit, ViewChild } from '@angular/core';
import { TableEventosComponent } from '../table-eventos/table-eventos.component';
import { EntityEventos } from '../interface/entity-eventos';
import { ListEventosService } from '../services/list-eventos.service';

@Component({
  selector: 'app-view-eventos',
  templateUrl: './view-eventos.component.html',
  styleUrl: './view-eventos.component.css'
})
export class ViewEventosComponent implements OnInit {
  list_eventos: EntityEventos[] = [];

  constructor(private listEventosService: ListEventosService){}

  ngOnInit(): void {
      this.list_eventos = this.listEventosService.getEventos();
  }

  activar_add_evento : boolean = false;
  activar_edit_evento: boolean = false;

  open_add_event (): void {
    this.activar_add_evento = true;
    this.activar_edit_evento = false;
  }

  close_add_event (): void {
    this.activar_add_evento = false;
  }

  open_edit_event (): void {
    this.activar_edit_evento = true;
    this.activar_add_evento = false;
  }

  close_edit_event (): void {
    this.activar_edit_evento = false;
  }
}
