import { Component, Input } from '@angular/core';
import { EntityPersonal } from '../interfaces/entity-personal';
import { ListPersonalService } from '../services/list-personal.service';

@Component({
  selector: 'app-tabke-personal',
  templateUrl: './tabke-personal.component.html',
  styleUrl: './tabke-personal.component.css'
})
export class TabkePersonalComponent {
  @Input() personal: EntityPersonal[] = [];

  constructor(private listPersonalServices: ListPersonalService){}

  down_this_personal(id_personal: number){
    this.listPersonalServices.downPersonal(id_personal);
  }
}
