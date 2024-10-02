import { Component } from '@angular/core';
import { EntitySalones } from '../interface/entity-salones';
import { ViewSalonesComponent } from '../view-salones/view-salones.component';

@Component({
  selector: 'app-edit-form-salones',
  templateUrl: './edit-form-salones.component.html',
  styleUrl: './edit-form-salones.component.css'
})
export class EditFormSalonesComponent {
  editSalon : EntitySalones = {
    id_salon: 0,
    nombre_salon: "",
    no_domicilio_salon: 0,
    calle_salon: "",
    colonia_salon: "",
    ciudad_salon: "",
    codigo_postal_salon: 0,
    cantidad_sillas_salon: 0,
    cantidad_mesas_salon: 0
  }

  id_search: number = 0;

  salon_is_found: boolean = false;

  constructor(private viewSalonesComponent: ViewSalonesComponent) {}

  searchSalon () : void {
    const list_salones = localStorage.getItem("list_salones");
    let list_search_salones = list_salones ? JSON.parse(list_salones) : [];
     
    for(let i = 0; i < list_search_salones.length; i++){
      const salon : EntitySalones = list_search_salones[i];
      if(this.id_search == salon.id_salon){
        this.editSalon = salon;
        console.log("Salon is found");
        this.salon_is_found = true;
        i = list_search_salones.length + 1;
      }  
    }
    
  }
  
  edit_salon (): void{
    const edir_another_salon: EntitySalones = {
      id_salon: this.editSalon.id_salon,
      nombre_salon: this.editSalon.nombre_salon,
      no_domicilio_salon: this.editSalon.no_domicilio_salon,
      calle_salon: this.editSalon.calle_salon,
      colonia_salon: this.editSalon.colonia_salon,
      ciudad_salon: this.editSalon.ciudad_salon,
      codigo_postal_salon: this.editSalon.codigo_postal_salon,
      cantidad_sillas_salon: this.editSalon.cantidad_sillas_salon,
      cantidad_mesas_salon: this.editSalon.cantidad_mesas_salon
    }
    const list_salones = localStorage.getItem("list_salones");
    let list_search_salones = list_salones ? JSON.parse(list_salones) : [];
    for(let i = 0; i < list_search_salones.length; i++){ 
      const searching_salon : EntitySalones = list_search_salones[i]
      console.log(edir_another_salon.id_salon, "=?", searching_salon.id_salon);
      if(edir_another_salon.id_salon == searching_salon.id_salon){
        list_search_salones.splice(i, 1);
        list_search_salones.push(edir_another_salon);
        localStorage.setItem("list_salones", JSON.stringify(list_search_salones));
        console.log("Salon was edited");
        i = list_search_salones.length + 1;
      }
    }
    this.editSalon.id_salon = 0;
    this.editSalon.nombre_salon = "";
    this.editSalon.no_domicilio_salon = 0;
    this.editSalon.calle_salon = "";
    this.editSalon.colonia_salon = "";
    this.editSalon.ciudad_salon = "";
    this.editSalon.codigo_postal_salon = 0;
    this.editSalon.cantidad_sillas_salon = 0;
    this.editSalon.cantidad_mesas_salon = 0;

    this.salon_is_found = false

    this.viewSalonesComponent.refreshTable();
    this.viewSalonesComponent.close_form_edit_salon();
  }
  
}
