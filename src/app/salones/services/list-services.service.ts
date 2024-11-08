import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { EntitySalones } from '../interface/entity-salones';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListServicesService {

  listSalones: EntitySalones[] = [];

  private url_api: string = 'http://localhost:3000/salones/'

  getSalonesFromLocalStorage(){
    const list_salones_from_lc = localStorage.getItem("list_salones");
    this.listSalones = list_salones_from_lc ? JSON.parse(list_salones_from_lc) : [];
    console.log(this.listSalones)
  }

  putSalonesIntoLocalStorage(){
    localStorage.setItem("list_salones", JSON.stringify(this.listSalones));
  }

  addSalon(newSalon: EntitySalones): Observable<EntitySalones>{
    //this.listSalones.push(newSalon);
    //this.putSalonesIntoLocalStorage();
    return this.http.post<EntitySalones>(this.url_api + "create", newSalon);
  }

  getSalones(): Observable<EntitySalones[]> {
    //this.getSalonesFromLocalStorage();
    //return this.listSalones;
    return this.http.get<EntitySalones[]>(this.url_api + "get");
  }

  getSalonById(id_salon : number): Observable<EntitySalones> {
    //this.getSalonesFromLocalStorage();
    //return this.listSalones[id_salon];
    return this.http.get<EntitySalones>(this.url_api + "get_by_id/" + id_salon);
  }

  editSalon(editThisSalon: EntitySalones): Observable<EntitySalones>{
    //this.listSalones[editThisSalon.id_salon] = editThisSalon;
    //this.putSalonesIntoLocalStorage();
    return this.http.put<EntitySalones>(this.url_api + "edit/" + editThisSalon.id_salon, editThisSalon);
  }

  downSalon(down_this_salon: number){
    //this.listSalones[down_this_salon].estado_salon = "Dado de baja";
    //this.putSalonesIntoLocalStorage();
    return this.http.patch<EntitySalones>(this.url_api + "down_salon/" + down_this_salon, null);
  }

  constructor(private http: HttpClient) { }
}
