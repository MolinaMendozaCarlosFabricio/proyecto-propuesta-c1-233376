import { Component, OnInit } from '@angular/core';
import { EntityInmuebles } from '../interfaces/entity-inmuebles';
import { ListInmueblesService } from '../services/list-inmuebles.service';

@Component({
  selector: 'app-view-inmuebles',
  templateUrl: './view-inmuebles.component.html',
  styleUrl: './view-inmuebles.component.css'
})
export class ViewInmueblesComponent implements OnInit {
  list_inmuebles: EntityInmuebles[] = []
  
  constructor(private listInmueblesServices: ListInmueblesService){}

  ngOnInit(): void {
      this.list_inmuebles = this.listInmueblesServices.getInmuebles();
  }

  activar_add_inmueble: boolean = false;

  activar_edit_inmueble: boolean = false;

  open_form_add_inmueble (): void {
    this.activar_add_inmueble = true;
    this.activar_edit_inmueble = false;
  }

  close_form_add_inmueble (): void {
    this.activar_add_inmueble = false;
  }

  open_form_edit_inmueble (): void {
    this.activar_edit_inmueble = true;
    this.activar_add_inmueble = false;
  }

  close_form_edit_inmueble (): void {
    this.activar_edit_inmueble = false;
  }
}
