import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalonesModule } from './salones/salones.module';
import { RouterLink } from '@angular/router';
import { EventosModule } from "./eventos/eventos.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SalonesModule,
    RouterLink,
    EventosModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
