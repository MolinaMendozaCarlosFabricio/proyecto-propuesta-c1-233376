import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { EntitySalones } from '../interface/entity-salones';

@Injectable({
  providedIn: 'root'
})
export class ListServicesService {

  listSalones: EntitySalones[] = []

  getSalonesFromLocalStorage(){
    const list_salones_from_lc = localStorage.getItem("list_salones");
    this.listSalones = list_salones_from_lc ? JSON.parse(list_salones_from_lc) : [];
    console.log(this.listSalones)
  }

  putSalonesIntoLocalStorage(){
    localStorage.setItem("list_salones", JSON.stringify(this.listSalones));
  }

  addSalon(newSalon: EntitySalones){
    this.listSalones.push(newSalon);
    this.putSalonesIntoLocalStorage();
  }

  getSalones(): EntitySalones [] {
    this.getSalonesFromLocalStorage();
    return this.listSalones;
  }

  getSalonById(id_salon : number): EntitySalones {
    this.getSalonesFromLocalStorage();
    return this.listSalones[id_salon];
  }

  editSalon(editThisSalon: EntitySalones){
    this.listSalones[editThisSalon.id_salon] = editThisSalon;
    this.putSalonesIntoLocalStorage();
  }

  downSalon(down_this_salon: number){
    this.listSalones[down_this_salon].estado_salon = "Dado de baja";
    this.putSalonesIntoLocalStorage();
  }

  constructor() { }
}
