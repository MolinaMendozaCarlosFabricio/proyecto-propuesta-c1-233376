import { Injectable } from '@angular/core';
import { EntityPersonal } from '../interfaces/entity-personal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListPersonalService {
  list_personal: EntityPersonal[] = [];

  url_api: string = 'http://34.238.16.229/personal/';

  getPersonalFromLocalStorage(){
    const list_personal_from_lc = localStorage.getItem("list_personal");
    this.list_personal = list_personal_from_lc ? JSON.parse(list_personal_from_lc) : [];
    console.log(this.list_personal)
  }

  putPersonalIntoLocalStorage(){
    localStorage.setItem("list_personal", JSON.stringify(this.list_personal));
  }

  addPersonal(newPersonal: EntityPersonal): Observable<EntityPersonal>{
    //this.list_personal.push(newPersonal);
    //this.putPersonalIntoLocalStorage();
    return this.http.post<EntityPersonal>(this.url_api + "create", newPersonal);
  }

  getPersonal(): Observable<EntityPersonal[]> {
    //this.getPersonalFromLocalStorage();
    //return this.list_personal;
    return this.http.get<EntityPersonal[]>(this.url_api + "get");
  }

  getPersonalById(id_personal : number): Observable<EntityPersonal> {
    //this.getPersonalFromLocalStorage();
    //return this.list_personal[id_personal];
    return this.http.get<EntityPersonal>(this.url_api + "get_by_id/" + id_personal)
  }

  editPersonal(editThisPersonal: EntityPersonal): Observable<EntityPersonal>{
    //this.list_personal[editThisPersonal.id_personal] = editThisPersonal;
    //this.putPersonalIntoLocalStorage();
    return this.http.put<EntityPersonal>(this.url_api + "edit/" + editThisPersonal.id_personal, editThisPersonal);
  }

  ocuparPersonal(id_personal: number): Observable<EntityPersonal>{
    //this.list_personal[id_personal].estado_personal = "Ocupado";
    //this.putPersonalIntoLocalStorage();
    return this.http.patch<EntityPersonal>(this.url_api + "occupy/" + id_personal, null);
  }

  desocuparPersonal(id_personal: number): Observable<EntityPersonal>{
    //this.list_personal[id_personal].estado_personal = "Activo";
    return this.http.patch<EntityPersonal>(this.url_api + "desoccupy/" + id_personal, null);
  }

  downPersonal(down_this_personal: number): Observable<EntityPersonal>{
    //this.list_personal[down_this_personal].estado_personal = "Dado de baja";
    //this.putPersonalIntoLocalStorage();
    return this.http.patch<EntityPersonal>(this.url_api + "down_personal/" + down_this_personal, null);
  }

  constructor(private http: HttpClient) { }
}
