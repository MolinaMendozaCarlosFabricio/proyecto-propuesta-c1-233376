import { Injectable } from '@angular/core';
import { EntityEventos } from '../interface/entity-eventos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListEventosService {
  list_eventos: EntityEventos[] = [];

  url_api: string = 'http://34.238.16.229/eventos/';

  getEventosFromLocalStorage(){
    const list_eventos_from_lc = localStorage.getItem("list_eventos");
    this.list_eventos = list_eventos_from_lc ? JSON.parse(list_eventos_from_lc) : [];
  }

  putEventosIntoLocalStorage(){
    localStorage.setItem("list_eventos", JSON.stringify(this.list_eventos));
  }

  addEvento(newEvento: EntityEventos): Observable<EntityEventos>{
    //this.list_eventos.push(newEvento);
    //this.putEventosIntoLocalStorage();
    return this.http.post<EntityEventos>(this.url_api + "create", newEvento);
  }

  getEventos(): Observable<EntityEventos[]>{
    //this.getEventosFromLocalStorage();
    //return this.list_eventos;
    return this.http.get<EntityEventos[]>(this.url_api + "get");
  }

  getEventoById(id_search: number): Observable<EntityEventos>{
    //this.getEventosFromLocalStorage();
    //return this.list_eventos[id_search];
    return this.http.get<EntityEventos>(this.url_api + "get_by_id/" + id_search);
  }

  editEvento(editThisEvento: EntityEventos): Observable<EntityEventos>{
    //this.list_eventos[editThisEvento.id_evento] = editThisEvento;
    //this.putEventosIntoLocalStorage();
    return this.http.put<EntityEventos>(this.url_api + "edit/" + editThisEvento.id_evento, editThisEvento);
  }

  finishEvento(id_evento: number): Observable<EntityEventos>{
    //this.list_eventos[id_evento].estado_evento = "Concluido";
    //this.putEventosIntoLocalStorage();
    return this.http.patch<EntityEventos>(this.url_api + "finish/" + id_evento, null);
  }

  cancelEvento(id_evento_to_cancel: number): Observable<EntityEventos>{
    //this.list_eventos[id_evento_to_cancel].estado_evento = "Cancelado";
    return this.http.patch<EntityEventos>(this.url_api + "cancel/" + id_evento_to_cancel, null);
  }

  constructor(private http : HttpClient) { }
}
