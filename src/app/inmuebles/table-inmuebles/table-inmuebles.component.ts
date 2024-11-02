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
export class TableInmueblesComponent implements OnInit{
  constructor(private listInmueblesServices: ListInmueblesService, private listSalonesServices: ListServicesService){}

  @Input() list_inmuebles: EntityInmuebles[] = [];
  list_salones: EntitySalones[] = [];

  ngOnInit(): void {
      this.list_salones = this.listSalonesServices.getSalones();
  }

  downInmueble(id_inmueble: number){
    this.listInmueblesServices.downInmueble(id_inmueble);
  }
}
