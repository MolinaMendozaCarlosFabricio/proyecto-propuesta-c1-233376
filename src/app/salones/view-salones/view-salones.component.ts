import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ListServicesService } from '../services/list-services.service';
import { EntitySalones } from '../interface/entity-salones';

@Component({
  selector: 'app-view-salones',
  templateUrl: './view-salones.component.html',
  styleUrl: './view-salones.component.css'
})
export class ViewSalonesComponent implements OnInit {
  list_salones: EntitySalones[] = []

  constructor(private listSalonesServices: ListServicesService){}

  ngOnInit(): void {
      this.listSalonesServices.getSalones().subscribe(
        response => {
          console.log("Respuesta del server:");
          this.list_salones = response;
        },
        error => console.log("Error:", error)
      )
  }

  activar_add_salon: boolean = false;

  activar_edit_salon: boolean = false;

  open_form_add_salon (): void {
    this.activar_add_salon = true;
    this.activar_edit_salon = false;
  }

  close_form_add_salon (): void {
    this.activar_add_salon = false;
  }

  open_form_edit_salon (): void {
    this.activar_edit_salon = true;
    this.activar_add_salon = false;
  }

  close_form_edit_salon (): void {
    this.activar_edit_salon = false;
  }
}
