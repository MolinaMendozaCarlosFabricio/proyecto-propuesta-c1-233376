import { Component, Input, OnInit } from '@angular/core';
import { ListServicesService } from '../../salones/services/list-services.service';
import { EntitySalones } from '../../salones/interface/entity-salones';

@Component({
  selector: 'app-column-salon',
  templateUrl: './column-salon.component.html',
  styleUrl: './column-salon.component.css'
})
export class ColumnSalonComponent implements OnInit {
  constructor(private listSalonesServices: ListServicesService){}

  @Input() id_salon: number = 0;

  salon: EntitySalones = {
    id_salon: 0,
    nombre_salon: "",
    no_domicilio_salon: 0,
    calle_salon: "",
    colonia_salon: "",
    ciudad_salon: "",
    codigo_postal_salon: 0,
    estado_salon: ""
  }

  ngOnInit(): void {
      this.listSalonesServices.getSalonById(this.id_salon).subscribe(
        response => {
          console.log("Respuesta recibida:");
          this.salon = response;
        },
        error => console.log("Error:", error)
      );
  }
}
