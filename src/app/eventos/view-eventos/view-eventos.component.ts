import { Component, ViewChild } from '@angular/core';
import { TableEventosComponent } from '../table-eventos/table-eventos.component';

@Component({
  selector: 'app-view-eventos',
  templateUrl: './view-eventos.component.html',
  styleUrl: './view-eventos.component.css'
})
export class ViewEventosComponent {
  @ViewChild(TableEventosComponent) tableEventosComponent!: TableEventosComponent;

  activar_add_evento : boolean = false;
  activar_edit_evento: boolean = false;

  open_add_event (): void {
    this.activar_add_evento = true;
    this.activar_edit_evento = false;
  }

  close_add_event (): void {
    this.activar_add_evento = false;
  }

  open_edit_event (): void {
    this.activar_edit_evento = true;
    this.activar_add_evento = false;
  }

  close_edit_event (): void {
    this.activar_edit_evento = false;
  }

  refresh_table(): void{
    this.tableEventosComponent.print_eventos();
  }
}
