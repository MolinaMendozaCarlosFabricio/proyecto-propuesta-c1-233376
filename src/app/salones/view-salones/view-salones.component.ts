import { Component, ViewChild } from '@angular/core';
import { TableSalonesComponent } from '../table-salones/table-salones.component';

@Component({
  selector: 'app-view-salones',
  templateUrl: './view-salones.component.html',
  styleUrl: './view-salones.component.css'
})
export class ViewSalonesComponent {
  @ViewChild(TableSalonesComponent) tableSalonesComponent!: TableSalonesComponent;

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

  refreshTable (): void {
    this.tableSalonesComponent.print_salones();
  }

}
