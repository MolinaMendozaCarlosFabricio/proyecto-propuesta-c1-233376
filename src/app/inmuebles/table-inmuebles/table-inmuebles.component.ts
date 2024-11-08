import { Component, Input, input, OnInit } from '@angular/core';
import { EntityInmuebles } from '../interfaces/entity-inmuebles';
import { ListInmueblesService } from '../services/list-inmuebles.service';
import { EntitySalones } from '../../salones/interface/entity-salones';
import { ListServicesService } from '../../salones/services/list-services.service';

@Component({
  selector: 'app-table-inmuebles',
  templateUrl: './table-inmuebles.component.html',
  styleUrl: './table-inmuebles.component.css'
})
export class TableInmueblesComponent{
  constructor(private listInmueblesServices: ListInmueblesService, private listSalonesServices: ListServicesService){}

  @Input() list_inmuebles: EntityInmuebles[] = [];

  downInmueble(id_inmueble: number){
    this.listInmueblesServices.downInmueble(id_inmueble).subscribe(
      response => console.log("Respuesta del servidor:", response),
      error => console.log("Error:", error)
    );
  }
}
