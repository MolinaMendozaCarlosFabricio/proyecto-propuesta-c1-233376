import { Injectable } from '@angular/core';
import { EntityEventos } from '../interface/entity-eventos';

@Injectable({
  providedIn: 'root'
})
export class ListEventosService {
  list_eventos: EntityEventos[] = [];

  getEventosFromLocalStorage(){
    const list_eventos_from_lc = localStorage.getItem("list_eventos");
    this.list_eventos = list_eventos_from_lc ? JSON.parse(list_eventos_from_lc) : [];
  }

  putEventosIntoLocalStorage(){
    localStorage.setItem("list_eventos", JSON.stringify(this.list_eventos));
  }

  addEvento(newEvento: EntityEventos){
    this.list_eventos.push(newEvento);
    this.putEventosIntoLocalStorage();
  }

  getEventos(): EntityEventos[]{
    this.getEventosFromLocalStorage();
    return this.list_eventos;
  }

  getEventoById(id_search: number): EntityEventos{
    this.getEventosFromLocalStorage();
    return this.list_eventos[id_search];
  }

  editEvento(editThisEvento: EntityEventos){
    this.list_eventos[editThisEvento.id_evento] = editThisEvento;
    this.putEventosIntoLocalStorage();
  }

  cancelEvento(id_evento_to_cancel: number){
    this.list_eventos[id_evento_to_cancel].estado_evento = "Cancelado";
  }

  constructor() { }
}
