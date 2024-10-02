import { Component } from '@angular/core';
import { EntitySalones } from '../interface/entity-salones';
import { ViewSalonesComponent } from '../view-salones/view-salones.component';

@Component({
  selector: 'app-add-form-salones',
  templateUrl: './add-form-salones.component.html',
  styleUrl: './add-form-salones.component.css'
})
export class AddFormSalonesComponent {
  newSalon : EntitySalones = {
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

  constructor(private viewSalonesComponent: ViewSalonesComponent) {}

  add_salon (): void{
    const add_another_salon: EntitySalones = {
      id_salon: 0,
      nombre_salon: this.newSalon.nombre_salon,
      no_domicilio_salon: this.newSalon.no_domicilio_salon,
      calle_salon: this.newSalon.calle_salon,
      colonia_salon: this.newSalon.colonia_salon,
      ciudad_salon: this.newSalon.ciudad_salon,
      codigo_postal_salon: this.newSalon.codigo_postal_salon,
      cantidad_sillas_salon: this.newSalon.cantidad_sillas_salon,
      cantidad_mesas_salon: this.newSalon.cantidad_mesas_salon
    }
    const list_salones = localStorage.getItem("list_salones");
    if (!list_salones){
      let new_list_salones: EntitySalones [] = [];
      new_list_salones.push(add_another_salon);

      localStorage.setItem("list_salones", JSON.stringify(new_list_salones));
    } else {
      let new_list_salones: EntitySalones[] = JSON.parse(list_salones); 
      add_another_salon.id_salon = new_list_salones.length + 1;
      new_list_salones.push(add_another_salon);
      localStorage.setItem("list_salones", JSON.stringify(new_list_salones));
    }
    this.newSalon.id_salon = 0;
    this.newSalon.nombre_salon = "";
    this.newSalon.no_domicilio_salon = 0;
    this.newSalon.calle_salon = "";
    this.newSalon.colonia_salon = "";
    this.newSalon.ciudad_salon = "";
    this.newSalon.codigo_postal_salon = 0;
    this.newSalon.cantidad_sillas_salon = 0;
    this.newSalon.cantidad_mesas_salon = 0;

    this.viewSalonesComponent.refreshTable();
    this.viewSalonesComponent.close_form_add_salon();
  }
}
