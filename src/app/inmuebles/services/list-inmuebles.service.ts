import { Injectable } from '@angular/core';
import { EntityInmuebles } from '../interfaces/entity-inmuebles';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListInmueblesService {
  list_inmuebles: EntityInmuebles[] = [];

  url_api: string = 'http://localhost:3000/inmuebles/'

  getInmueblesFromLocalStorage(){
    const list_inmuebles_lc = localStorage.getItem("list_inmuebles");
    this.list_inmuebles = list_inmuebles_lc ? JSON.parse(list_inmuebles_lc) : [];
  }

  putInmueblesIntoLocalStorage(){
    localStorage.setItem("list_inmuebles", JSON.stringify(this.list_inmuebles));
  }

  addInmueble(newInmueble: EntityInmuebles):Observable<EntityInmuebles>{
    //this.list_inmuebles.push(newInmueble);
    //this.putInmueblesIntoLocalStorage();
    return this.http.post<EntityInmuebles>(this.url_api + 'create', newInmueble);
  }

  getInmuebles(): Observable<EntityInmuebles[]>{
    //this.getInmueblesFromLocalStorage();
    //eturn this.list_inmuebles;
    return this.http.get<EntityInmuebles[]>(this.url_api + 'get');
  }

  getInmuebleById(id_search: number): Observable<EntityInmuebles> {
    //this.getInmueblesFromLocalStorage();
    //return this.list_inmuebles[id_search];
    return this.http.get<EntityInmuebles>(this.url_api + 'get_by_id/' + id_search);
  }

  editInmueble(editThisInmueble: EntityInmuebles): Observable<EntityInmuebles>{
    //this.list_inmuebles[editThisInmueble.id_inmueble] = editThisInmueble;
    //this.putInmueblesIntoLocalStorage();
    return this.http.put<EntityInmuebles>(this.url_api + 'edit/' + editThisInmueble.id_inmueble, editThisInmueble);
  }

  downInmueble(id_inmueble: number): Observable<EntityInmuebles>{
    //this.list_inmuebles[id_inmueble].estado_inmueble = "Dado de baja";
    //this.putInmueblesIntoLocalStorage();
    return this.http.patch<EntityInmuebles>(this.url_api + 'down_inmueble/' + id_inmueble, null);
  }

  ocuparInmueble(id_inmueble: number){
    //this.list_inmuebles[id_inmueble].estado_inmueble = "Ocupado";
    //this.putInmueblesIntoLocalStorage();
    return this.http.patch<EntityInmuebles>(this.url_api + 'occupy/' + id_inmueble, null);
  }

  desocuparInmueble(id_inmueble: number){
    //this.list_inmuebles[id_inmueble].estado_inmueble = "Activo";
    //this.putInmueblesIntoLocalStorage();
    return this.http.patch<EntityInmuebles>(this.url_api + 'desoccupy/' + id_inmueble, null);
  }

  constructor(private http: HttpClient) { }
}
