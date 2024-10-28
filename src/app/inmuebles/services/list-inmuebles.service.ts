import { Injectable } from '@angular/core';
import { EntityInmuebles } from '../interfaces/entity-inmuebles';

@Injectable({
  providedIn: 'root'
})
export class ListInmueblesService {
  list_inmuebles: EntityInmuebles[] = [];

  getInmueblesFromLocalStorage(){
    const list_inmuebles_lc = localStorage.getItem("list_inmuebles");
    this.list_inmuebles = list_inmuebles_lc ? JSON.parse(list_inmuebles_lc) : [];
  }

  putInmueblesIntoLocalStorage(){
    localStorage.setItem("list_inmuebles", JSON.stringify(this.list_inmuebles));
  }

  addInmueble(newInmueble: EntityInmuebles){
    this.list_inmuebles.push(newInmueble);
    this.putInmueblesIntoLocalStorage();
  }

  getInmuebles(){
    this.getInmueblesFromLocalStorage();
    return this.list_inmuebles;
  }

  getInmuebleById(id_search: number): EntityInmuebles {
    this.getInmueblesFromLocalStorage();
    return this.list_inmuebles[id_search];
  }

  editInmueble(editThisInmueble: EntityInmuebles){
    this.list_inmuebles[editThisInmueble.id_inmueble] = editThisInmueble;
    this.putInmueblesIntoLocalStorage();
  }

  constructor() { }
}
