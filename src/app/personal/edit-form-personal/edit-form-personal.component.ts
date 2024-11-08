import { Component, OnInit } from '@angular/core';
import { EntityPersonal } from '../interfaces/entity-personal';
import { ListPersonalService } from '../services/list-personal.service';
import { ViewPersonalComponent } from '../view-personal/view-personal.component';
import { ListServicesService } from '../../salones/services/list-services.service';
import { EntitySalones } from '../../salones/interface/entity-salones';

@Component({
  selector: 'app-edit-form-personal',
  templateUrl: './edit-form-personal.component.html',
  styleUrl: './edit-form-personal.component.css'
})
export class EditFormPersonalComponent {
  editEmpleado: EntityPersonal = {
    id_personal: 0,
    nombre_personal: "",
    apellido_personal: "",
    phone_personal: "",
    id_salon_pertenece: 0,
    sueldo_personal: 0,
    estado_personal: ""
  }

  list_salones: EntitySalones[] = []

  id_search: number = 0;

  empleado_is_found: boolean = false;

  dont_exists: boolean = false;

  constructor(private listPersonalServices: ListPersonalService, private viewPersonalComponent: ViewPersonalComponent, private listSalonesServices: ListServicesService){}

  searchPersonal(){
    this.listSalonesServices.getSalones().subscribe(
      response => {
        console.log("Respuesta del server:");
        this.list_salones = response;
      },
      error => console.log("Error:", error)
    );
    this.listPersonalServices.getPersonalById(this.id_search).subscribe(
      response => {
        console.log("It's ok!");
        this.editEmpleado = response;
      },
      error => console.log("Error:", error)
    );
    if(this.editEmpleado == null)
      this.dont_exists = true;
    else
      this.empleado_is_found = true;
  }

  editPersonal(){
    console.log(this.editEmpleado)
    this.listPersonalServices.editPersonal(this.editEmpleado);
    this.editEmpleado = {
      id_personal: 0,
      nombre_personal: "",
      apellido_personal: "",
      phone_personal: "",
      id_salon_pertenece: 0,
      sueldo_personal: 0,
      estado_personal: ""
    }

    this.empleado_is_found = false;

    this.viewPersonalComponent.ngOnInit();
  }
}
