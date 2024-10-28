import { Injectable } from '@angular/core';
import { EntityPersonal } from '../interfaces/entity-personal';

@Injectable({
  providedIn: 'root'
})
export class ListPersonalService {
  list_personal: EntityPersonal[] = []

  getPersonalFromLocalStorage(){
    const list_personal_from_lc = localStorage.getItem("list_personal");
    this.list_personal = list_personal_from_lc ? JSON.parse(list_personal_from_lc) : [];
    console.log(this.list_personal)
  }

  putPersonalIntoLocalStorage(){
    localStorage.setItem("list_personal", JSON.stringify(this.list_personal));
  }

  addPersonal(newPersonal: EntityPersonal){
    this.list_personal.push(newPersonal);
    this.putPersonalIntoLocalStorage();
  }

  getPersonal(): EntityPersonal [] {
    this.getPersonalFromLocalStorage();
    return this.list_personal;
  }

  getPersonalById(id_personal : number): EntityPersonal {
    this.getPersonalFromLocalStorage();
    return this.list_personal[id_personal];
  }

  editPersonal(editThisPersonal: EntityPersonal){
    this.list_personal[editThisPersonal.id_personal] = editThisPersonal;
    this.putPersonalIntoLocalStorage();
  }

  downPersonal(down_this_personal: number){
    this.list_personal[down_this_personal].estado_personal = "Dado de baja";
    this.putPersonalIntoLocalStorage();
  }

  constructor() { }
}
