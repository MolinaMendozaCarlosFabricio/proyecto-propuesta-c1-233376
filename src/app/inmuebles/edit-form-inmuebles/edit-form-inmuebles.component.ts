import { Component } from '@angular/core';
import { EntityInmuebles } from '../interfaces/entity-inmuebles';
import { ListInmueblesService } from '../services/list-inmuebles.service';
import { ListServicesService } from '../../salones/services/list-services.service';
import { EntitySalones } from '../../salones/interface/entity-salones';
import { ViewInmueblesComponent } from '../view-inmuebles/view-inmuebles.component';

@Component({
  selector: 'app-edit-form-inmuebles',
  templateUrl: './edit-form-inmuebles.component.html',
  styleUrl: './edit-form-inmuebles.component.css'
})
export class EditFormInmueblesComponent {
  editInmueble: EntityInmuebles = {
    id_inmueble: 0,
    nombre_inmueble: "",
    estado_inmueble: "",
    id_salon_asignado: 0
  }

  list_salones: EntitySalones[] = [];

  id_search: number = 0;

  inmueble_is_found: boolean = false;

  dont_exists: boolean = false;

  constructor(private listInmueblesServices: ListInmueblesService, private listSalonesServices : ListServicesService, private viewInmueblesComponent : ViewInmueblesComponent){}

  searchInmueble(){
    this.editInmueble = this.listInmueblesServices.getInmuebleById(this.id_search);
    if(this.editInmueble == null)
      this.dont_exists = true;
    else
      this.inmueble_is_found = true

    this.list_salones = this.listSalonesServices.getSalones();
  }

  editThisImmueble(){
    this.listInmueblesServices.editInmueble(this.editInmueble);
    this.editInmueble = {
      id_inmueble: 0,
      nombre_inmueble: "",
      estado_inmueble: "",
      id_salon_asignado: 0
    }

    this.inmueble_is_found = false;

    this.viewInmueblesComponent.ngOnInit();
  }
}
