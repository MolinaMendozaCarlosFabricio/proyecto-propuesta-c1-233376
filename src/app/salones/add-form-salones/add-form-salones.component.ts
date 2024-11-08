import { Component, Input } from '@angular/core';
import { EntitySalones } from '../interface/entity-salones';
import { ViewSalonesComponent } from '../view-salones/view-salones.component';
import { ListServicesService } from '../services/list-services.service';

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
    estado_salon: "Abierto"
  }

  constructor(private listSalonesService: ListServicesService) {}

  add_salon (): void{

    this.listSalonesService.addSalon(this.newSalon).subscribe(
      response => console.log("Respuesta del server:", response),
      error => console.log("Error:", error)
    )

    this.newSalon = {
      id_salon: 0,
      nombre_salon: "",
      no_domicilio_salon: 0,
      calle_salon: "",
      colonia_salon: "",
      ciudad_salon: "",
      codigo_postal_salon: 0,
      estado_salon: "Abierto"
    }
  }
}
