import { Component, Input, OnInit } from '@angular/core';
import { EntityInmuebles } from '../interfaces/entity-inmuebles';
import { ListInmueblesService } from '../services/list-inmuebles.service';
import { ListServicesService } from '../../salones/services/list-services.service';
import { EntitySalones } from '../../salones/interface/entity-salones';

@Component({
  selector: 'app-add-form-inmuebles',
  templateUrl: './add-form-inmuebles.component.html',
  styleUrl: './add-form-inmuebles.component.css'
})
export class AddFormInmueblesComponent implements OnInit {
  @Input() new_id_inmueble: number = 0;

  list_salones: EntitySalones[] = []

  newInmueble: EntityInmuebles = {
    id_inmueble: 0,
    nombre_inmueble: "",
    estado_inmueble: "Activo",
    id_salon_asignado: 0
  }

  constructor(private listInmueblesServices: ListInmueblesService, private listSalonesServices: ListServicesService){}

  ngOnInit(): void {
    this.list_salones = this.listSalonesServices.getSalones();
  }

  addInmueble(){
    this.newInmueble.id_inmueble = this.new_id_inmueble;
    this.listInmueblesServices.addInmueble(this.newInmueble);
    this.newInmueble = {
      id_inmueble: 0,
      nombre_inmueble: "",
      estado_inmueble: "Activo",
      id_salon_asignado: 0
    }
  }
}
