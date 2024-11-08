import { Component, OnInit, Input } from '@angular/core';
import { ViewAgendasComponent } from '../view-agendas/view-agendas.component';
import { EntityAgendas } from '../interface/entity-agendas';
import { ListAgendaService } from '../services/list-agenda.service';
import { EntitySalones } from '../../salones/interface/entity-salones';
import { EntityPersonal } from '../../personal/interfaces/entity-personal';
import { EntityInmuebles } from '../../inmuebles/interfaces/entity-inmuebles';
import { ListServicesService } from '../../salones/services/list-services.service';
import { ListPersonalService } from '../../personal/services/list-personal.service';
import { ListInmueblesService } from '../../inmuebles/services/list-inmuebles.service';
import { ViewEventosComponent } from '../../eventos/view-eventos/view-eventos.component';


@Component({
  selector: 'app-add-form-agendas',
  templateUrl: './add-form-agendas.component.html',
  styleUrl: './add-form-agendas.component.css'
})
export class AddFormAgendasComponent implements OnInit {
  constructor(private listAgendasServices: ListAgendaService, private listSalonesServices: ListServicesService, private listPersonalServices: ListPersonalService, private listInmueblesServices: ListInmueblesService, private viewEventosComponent: ViewEventosComponent){}

  new_id_agenda: number = 0;
  list_salones: EntitySalones[] = [];
  list_empleados: EntityPersonal[] = [];
  list_inmuebles: EntityInmuebles[] = [];

  new_fecha: string = "";
  new_hora: string = "";

  newAgenda: EntityAgendas = {
    id_agenda: 0,
    id_evento: 0,
    id_salon: 0,
    fecha_hora_evento: new Date(),
    duracion_horas_evento: 0,
    fecha_reserva: null,
    ids_personal_reservado: [],
    ids_inmuebles_reservados: [],
  }

  @Input() id_evento_to_link: number = 0;

  ngOnInit(): void {
      this.new_id_agenda = this.listAgendasServices.getNewId();
      this.listSalonesServices.getSalones().subscribe(
        response => {
          console.log("Respuesta del servidor:");
          this.list_salones= response;
        },
        error => console.log("Error:", error)
      );
      this.listPersonalServices.getPersonal().subscribe(
        response => {
          console.log("It's ok!");
          this.list_empleados = response;
        },
        error => console.log("Error:", error)
      );
      this.listInmueblesServices.getInmuebles().subscribe(
        response => {
          console.log("It's ok!");
          this.list_inmuebles = response;
        },
        error => console.log("Error:", error)
      );
  }

  asignarEmpleado(id_empleado: number){
    //this.listPersonalServices.ocuparPersonal(id_empleado);
    this.newAgenda.ids_personal_reservado.push(id_empleado);
  }

  quitarEmpleado(id_empleado: number){
    //this.listPersonalServices.desocuparPersonal(id_empleado);
    for(let i: number = 0; i < this.newAgenda.ids_personal_reservado.length; i++){
      if(id_empleado == this.newAgenda.ids_personal_reservado[i])
        this.newAgenda.ids_personal_reservado.splice(i, 1);
    }
  }

  isAsigned: boolean = false;

  thisEmpleadoIsAlreadyAsignado(id_empleado: number): boolean{
    let bandera: boolean = false
    for(let i: number = 0; i < this.newAgenda.ids_personal_reservado.length; i++){
      if(id_empleado == this.newAgenda.ids_personal_reservado[i]){
        bandera = true;
        return bandera;
      }
    }
      
    return false;
  }

  asignarInmueble(id_inmueble: number){
    this.newAgenda.ids_inmuebles_reservados.push(id_inmueble);
  }

  quitarInmueble(id_inmueble: number){
    for(let i:number = 0; i < this.newAgenda.ids_inmuebles_reservados.length; i++){
      if(id_inmueble == this.newAgenda.ids_inmuebles_reservados[i])
        this.newAgenda.ids_inmuebles_reservados.splice(i, 1);
    }
  }

  thisInmuebleWasAsigned: boolean = false;

  thisInmuebleIsAlreadyAsignado(id_inmueble: number): boolean{
    let bandera = false;
    for(let i: number = 0; i < this.newAgenda.ids_inmuebles_reservados.length; i++){
      if(id_inmueble == this.newAgenda.ids_inmuebles_reservados[i]){
        bandera = true;
        return bandera;
      }
    }

    return false;
  }

  addAgenda(){
    this.newAgenda.id_agenda = this.new_id_agenda;
    this.newAgenda.id_evento = this.id_evento_to_link;
    this.newAgenda.fecha_reserva = new Date();
    this.newAgenda.fecha_hora_evento = new Date(`${this.new_fecha}T${this.new_hora}`)

    this.listAgendasServices.add(this.newAgenda);

    /*
    for(let i: number = 0; i < this.newAgenda.ids_personal_reservado.length; i++){
      this.listPersonalServices.ocuparPersonal(this.newAgenda.ids_personal_reservado[i]).subscribe(
        response => console.log("Respuesta del servidor:", response),
        error => console.log("Error:", error)
      );
    }

    for(let i: number = 0; i < this.newAgenda.ids_inmuebles_reservados.length; i++){
      this.listInmueblesServices.ocuparInmueble(this.newAgenda.ids_inmuebles_reservados[i]).subscribe(
        response => console.log("Respuesta del servidor:", response),
        error => console.log("Error:", error)
      );
    }
    */

    this.newAgenda = {
      id_agenda: 0,
      id_evento: 0,
      id_salon: 0,
      fecha_hora_evento: new Date(),
      duracion_horas_evento: 0,
      fecha_reserva: null,
      ids_personal_reservado: [],
      ids_inmuebles_reservados: [],
    }

    this.viewEventosComponent.close_add_event();
  }
}
