import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewSalonesComponent } from './salones/view-salones/view-salones.component';
import { ViewEventosComponent } from './eventos/view-eventos/view-eventos.component';
import { ViewPersonalComponent } from './personal/view-personal/view-personal.component';
import { ViewInmueblesComponent } from './inmuebles/view-inmuebles/view-inmuebles.component';
import { ViewAgendasComponent } from './agendas/view-agendas/view-agendas.component';

const routes: Routes = [
  {path: "salones", component: ViewSalonesComponent},
  {path: "eventos", component: ViewEventosComponent},
  {path: "personal", component: ViewPersonalComponent},
  {path: "inmuebles", component: ViewInmueblesComponent},
  {path: "agenda", component: ViewAgendasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
