import { Component, OnInit } from '@angular/core';
import { EntityPersonal } from '../interfaces/entity-personal';
import { ListPersonalService } from '../services/list-personal.service';

@Component({
  selector: 'app-view-personal',
  templateUrl: './view-personal.component.html',
  styleUrl: './view-personal.component.css'
})
export class ViewPersonalComponent implements OnInit {
  list_personal: EntityPersonal[] = []

  constructor(private listPersonalService: ListPersonalService){}

  ngOnInit(): void {
      this.listPersonalService.getPersonal().subscribe(
        response => {
          console.log("It's ok!");
          this.list_personal = response;
        },
        error => console.log("Error:", error)
      );
  }

  activar_add_personal: boolean = false;

  activar_edit_personal: boolean = false;

  open_form_add_personal (): void {
    this.activar_add_personal = true;
    this.activar_edit_personal = false;
  }

  close_form_add_personal (): void {
    this.activar_add_personal = false;
  }

  open_form_edit_personal (): void {
    this.activar_edit_personal = true;
    this.activar_add_personal = false;
  }

  close_form_edit_personal (): void {
    this.activar_edit_personal = false;
  }
}
