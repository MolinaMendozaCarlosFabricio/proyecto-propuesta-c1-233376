import { Component, OnInit } from '@angular/core';
import { EntityAgendas } from '../interface/entity-agendas';
import { ListAgendaService } from '../services/list-agenda.service';

@Component({
  selector: 'app-table-agendas',
  templateUrl: './table-agendas.component.html',
  styleUrl: './table-agendas.component.css'
})
export class TableAgendasComponent implements OnInit {
  constructor(private listAgendasServices: ListAgendaService){}
  
  list_agendas: EntityAgendas[] = [];

  ngOnInit(): void {
      this.list_agendas = this.listAgendasServices.getAll();
  }
}
