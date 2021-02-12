import { Component, OnInit } from '@angular/core';
import { ControlEventosService } from '../servicios/control-eventos.service';

@Component({
  selector: 'app-hijonivel12',
  templateUrl: './hijonivel12.component.html',
  styleUrls: ['./hijonivel12.component.css']
})
export class Hijonivel12Component implements OnInit {

  constructor(private controlEventosService:ControlEventosService) { }

  ngOnInit(): void {
    this.controlEventosService.eventEmitterFunction.subscribe(
      res=> {
        console.log('Soy Hijo1 2 y he recibido: '+res);
      }
    )
  }

  emitir(mensaje:string){
    this.controlEventosService.emitir(mensaje);
  }

}
