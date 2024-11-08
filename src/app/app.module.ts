import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalonesModule } from './salones/salones.module';
import { RouterLink } from '@angular/router';
import { EventosModule } from "./eventos/eventos.module";
import { AgendasModule } from './agendas/agendas.module';
import { PersonalModule } from './personal/personal.module';
import { InmueblesModule } from './inmuebles/inmuebles.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SalonesModule,
    PersonalModule,
    InmueblesModule,
    AgendasModule,
    RouterLink,
    EventosModule,
    HttpClientModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
