import { Component, Input, OnInit } from '@angular/core';
import { EntityPersonal } from '../interfaces/entity-personal';
import { ListPersonalService } from '../services/list-personal.service';
import { ListServicesService } from '../../salones/services/list-services.service';
import { EntitySalones } from '../../salones/interface/entity-salones';

@Component({
  selector: 'app-add-form-personal',
  templateUrl: './add-form-personal.component.html',
  styleUrl: './add-form-personal.component.css'
})
export class AddFormPersonalComponent implements OnInit {
  list_options_salones: EntitySalones[] = [];

  ngOnInit(): void {
      this.listaSalonesServices.getSalones().subscribe(
        response => {
          console.log("Respuesta del servidor:")
          this.list_options_salones = response;
        },
        error => {
          console.log("Error", error)
        }
      );
  }

  newPersonal: EntityPersonal = {
    id_personal: 0,
    nombre_personal: "",
    apellido_personal: "",
    phone_personal: "",
    id_salon_pertenece: 0,
    sueldo_personal: 0,
    estado_personal: "Activo"
  }

  constructor(private listPersonalServices : ListPersonalService, private listaSalonesServices : ListServicesService){}

  addPersonal (){
    this.listPersonalServices.addPersonal(this.newPersonal).subscribe(
      response => console.log("Respuesta del servidor:", response),
      error => console.log("Error:", error)
    );
    this.newPersonal = {
      id_personal: 0,
      nombre_personal: "",
      apellido_personal: "",
      phone_personal: "",
      id_salon_pertenece: 0,
      sueldo_personal: 0,
      estado_personal: "Activo"
    }
  }
}
