import { Component, Input, OnInit } from '@angular/core';
import { EntityInmuebles } from '../../inmuebles/interfaces/entity-inmuebles';
import { ListInmueblesService } from '../../inmuebles/services/list-inmuebles.service';

@Component({
  selector: 'app-column-inmueble',
  templateUrl: './column-inmueble.component.html',
  styleUrl: './column-inmueble.component.css'
})
export class ColumnInmuebleComponent implements OnInit{
  constructor(private listInmueblesServices: ListInmueblesService){}

  @Input() list_inmuebles_id: number[] = [];

  @Input() dateEvento: Date = new Date();
  actualDate: Date = new Date();

  list_inmuebles: EntityInmuebles[] = []

  ngOnInit(): void {
      for(let i: number = 0; i < this.list_inmuebles_id.length; i++){
        this.listInmueblesServices.getInmuebleById(this.list_inmuebles_id[i]).subscribe(
          response => {
            console.log("It's ok!");
            this.list_inmuebles.push(response);
          },
          error => console.log("Error:", error)
        )

        if(this.dateEvento < this.actualDate)
          this.listInmueblesServices.desocuparInmueble(this.list_inmuebles_id[i]).subscribe(
            response => console.log("Respuesta del server:", response),
            error => console.log("Error:", error)
          );
      }
  }
}
