import { Component, Input, OnInit } from '@angular/core';
import { ListPersonalService } from '../../personal/services/list-personal.service';
import { EntityPersonal } from '../../personal/interfaces/entity-personal';

@Component({
  selector: 'app-column-personal',
  templateUrl: './column-personal.component.html',
  styleUrl: './column-personal.component.css'
})
export class ColumnPersonalComponent implements OnInit{
  constructor(private listPersonalServices: ListPersonalService){}

  @Input() list_personal_id: number[] = [];

  @Input() dateEvento: Date = new Date();
  actualDate: Date = new Date();

  list_personal : EntityPersonal[] = [];

  ngOnInit(): void {
      for(let i:number = 0; i < this.list_personal_id.length; i++){
        this.list_personal.push(this.listPersonalServices.getPersonalById(this.list_personal_id[i]));
        if(this.dateEvento < this.actualDate)
          this.listPersonalServices.desocuparPersonal(this.list_personal_id[i]);
      }
  }
}
