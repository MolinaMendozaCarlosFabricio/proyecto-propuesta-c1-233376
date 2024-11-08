import { Component, Input } from '@angular/core';
import { EntitySalones } from '../interface/entity-salones';
import { ListServicesService } from '../services/list-services.service';

@Component({
  selector: 'app-table-salones',
  templateUrl: './table-salones.component.html',
  styleUrl: './table-salones.component.css'
})
export class TableSalonesComponent{
  @Input() salones: EntitySalones[] = []

  constructor(private listSalonesServices : ListServicesService){}

  down_this_salon (down_this_salon: number): void {
    this.listSalonesServices.downSalon(down_this_salon).subscribe(
      response => console.log("Respuesta del server", response),
      error => console.log("Error:", error)
    );
  }
}
