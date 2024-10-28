import { Component, Input, OnInit } from '@angular/core';
import { EntityPersonal } from '../interfaces/entity-personal';
import { ListPersonalService } from '../services/list-personal.service';
import { ListServicesService } from '../../salones/services/list-services.service';
import { EntitySalones } from '../../salones/interface/entity-salones';

@Component({
  selector: 'app-item-personal',
  templateUrl: './item-personal.component.html',
  styleUrl: './item-personal.component.css'
})
export class ItemPersonalComponent implements OnInit {
  @Input() id_salon_to_search: number = 0;

  salon_asignado: EntitySalones = {
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

  constructor(private listaSalonesServices: ListServicesService){}

  ngOnInit(): void {
      this.salon_asignado = this.listaSalonesServices.getSalonById(this.id_salon_to_search);
  }
}
