import { Component, Input, input } from '@angular/core';
import { EntityInmuebles } from '../interfaces/entity-inmuebles';
import { ListInmueblesService } from '../services/list-inmuebles.service';

@Component({
  selector: 'app-table-inmuebles',
  templateUrl: './table-inmuebles.component.html',
  styleUrl: './table-inmuebles.component.css'
})
export class TableInmueblesComponent {
  @Input() list_inmuebles: EntityInmuebles[] = [];
}
