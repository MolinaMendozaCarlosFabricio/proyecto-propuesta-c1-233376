import { Component, OnInit } from '@angular/core';
import { EntityEventos } from '../interface/entity-eventos';

@Component({
  selector: 'app-table-eventos',
  templateUrl: './table-eventos.component.html',
  styleUrl: './table-eventos.component.css'
})
export class TableEventosComponent implements OnInit{

  eventos: EntityEventos[] = [];

  ngOnInit(): void {
      this.print_eventos();
  }

  print_eventos (): void {
    const list_eventos = localStorage.getItem("list_eventos");
    this.eventos = list_eventos ? JSON.parse(list_eventos) : [];
  }

  delete_eventos (delete_this : number): void {
    const list_eventos = localStorage.getItem("list_eventos");
    let list_search_eventos = list_eventos ? JSON.parse(list_eventos) : [];
    for(let i = 0; i < list_search_eventos.length; i++){ 
      const searching_evento : EntityEventos = list_search_eventos[i]
      console.log(delete_this, "=?", searching_evento.id_evento);
      if(delete_this == searching_evento.id_evento){
        list_search_eventos.splice(i, 1);  // Elimina 1 elemento en la posición 'i'
        localStorage.setItem("list_eventos", JSON.stringify(list_search_eventos));
        console.log("Salon was delete");
        i = list_search_eventos.length + 1;
      }
    }
    this.print_eventos();
  }

}
