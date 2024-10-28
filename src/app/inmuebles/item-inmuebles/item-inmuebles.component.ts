import { Component, Input, OnInit } from '@angular/core';
import { ListServicesService } from '../../salones/services/list-services.service';
import { EntitySalones } from '../../salones/interface/entity-salones';

@Component({
  selector: 'app-item-inmuebles',
  templateUrl: './item-inmuebles.component.html',
  styleUrl: './item-inmuebles.component.css'
})
export class ItemInmueblesComponent implements OnInit {
  @Input() id_salon_asignado: number = 0;

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

  constructor(private listSalonesServices: ListServicesService){}

  ngOnInit(): void {
      this.salon_asignado = this.listSalonesServices.getSalonById(this.id_salon_asignado);
  }
}
