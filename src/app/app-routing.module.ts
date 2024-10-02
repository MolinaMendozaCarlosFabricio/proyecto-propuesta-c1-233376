import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewSalonesComponent } from './salones/view-salones/view-salones.component';

const routes: Routes = [
  {path: "salones", component: ViewSalonesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
