import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewSalonesComponent } from './salones/view-salones/view-salones.component';
import { ViewEventosComponent } from './eventos/view-eventos/view-eventos.component';

const routes: Routes = [
  {path: "salones", component: ViewSalonesComponent},
  {path: "eventos", component: ViewEventosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
