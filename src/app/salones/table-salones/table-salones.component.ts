import { Component, OnInit } from '@angular/core';
import { EntitySalones } from '../interface/entity-salones';

@Component({
  selector: 'app-table-salones',
  templateUrl: './table-salones.component.html',
  styleUrl: './table-salones.component.css'
})
export class TableSalonesComponent implements OnInit {
  salones: EntitySalones[] = []

  ngOnInit (): void {
    this.print_salones();
  }

  print_salones (): void{
    const list_salones = localStorage.getItem("list_salones");
    this.salones = list_salones ? JSON.parse(list_salones) : [];
  }

  delete_salon (delete_this: number): void {
    const list_salones = localStorage.getItem("list_salones");
    let list_search_salones = list_salones ? JSON.parse(list_salones) : [];
    for(let i = 0; i < list_search_salones.length; i++){ 
      const searching_salon : EntitySalones = list_search_salones[i]
      console.log(delete_this, "=?", searching_salon.id_salon);
      if(delete_this == searching_salon.id_salon){
        list_search_salones.splice(i, 1);  // Elimina 1 elemento en la posición 'i'
        localStorage.setItem("list_salones", JSON.stringify(list_search_salones));
        console.log("Salon was delete");
        i = list_search_salones.length + 1;
      }
    }

    this.print_salones();
  }
}
