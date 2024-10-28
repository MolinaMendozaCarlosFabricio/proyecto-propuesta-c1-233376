import { Component } from '@angular/core';
import { EntitySalones } from '../interface/entity-salones';
import { ViewSalonesComponent } from '../view-salones/view-salones.component';
import { ListServicesService } from '../services/list-services.service';

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
    cantidad_mesas_salon: 0,
    estado_salon: ""
  }

  id_search: number = 0;

  salon_is_found: boolean = false;

  dont_exists: boolean = false;

  constructor(private listSalonesServices: ListServicesService, private viewSalonesComponent : ViewSalonesComponent){}
  
  searchSalon(){
    this.editSalon = this.listSalonesServices.getSalonById(this.id_search);
    if(this.editSalon == null)
      this.dont_exists = true;
    else
      this.salon_is_found = true;
  }

  edit_salon (): void{
    this.listSalonesServices.editSalon(this.editSalon);
    this.editSalon = {
      id_salon: 0,
      nombre_salon: "",
      no_domicilio_salon: 0,
      calle_salon: "",
      colonia_salon: "",
      ciudad_salon: "",
      codigo_postal_salon: 0,
      cantidad_sillas_salon: 0,
      cantidad_mesas_salon: 0,
      estado_salon: ""
    }

    this.salon_is_found = false

    this.viewSalonesComponent.ngOnInit();
  }
  
}
