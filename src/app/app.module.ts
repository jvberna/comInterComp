import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadreComponent } from './padre/padre.component';
import { Hijonivel11Component } from './hijonivel11/hijonivel11.component';
import { Hijonivel12Component } from './hijonivel12/hijonivel12.component';
import { ControlEventosService } from './servicios/control-eventos.service';

@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    Hijonivel11Component,
    Hijonivel12Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ControlEventosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
