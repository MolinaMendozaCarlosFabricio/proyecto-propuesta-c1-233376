import { Injectable } from '@angular/core';
import { EntityAgendas } from '../interface/entity-agendas';

@Injectable({
  providedIn: 'root'
})
export class ListAgendaService {
  private list_agendas: EntityAgendas[] = [];

  getAgendasFromLocalStorage(){
    const list_agendas_from_lc = localStorage.getItem("list_agendas");
    this.list_agendas = list_agendas_from_lc ? JSON.parse(list_agendas_from_lc) : [];
  }

  putAgendasFromLocalStorage(){
    localStorage.setItem("list_agendas", JSON.stringify(this.list_agendas));
  }

  add(newAgenda: EntityAgendas){
    this.list_agendas.push(newAgenda);
    this.putAgendasFromLocalStorage();
  }

  getAll(): EntityAgendas[]{
    this.getAgendasFromLocalStorage();
    return this.list_agendas;
  }

  getNewId(): number {
    return this.list_agendas.length;
  }

  constructor() { }
}
