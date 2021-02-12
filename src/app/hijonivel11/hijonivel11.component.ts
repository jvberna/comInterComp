import { Component, OnInit } from '@angular/core';
import { ControlEventosService } from '../servicios/control-eventos.service';

@Component({
  selector: 'app-hijonivel11',
  templateUrl: './hijonivel11.component.html',
  styleUrls: ['./hijonivel11.component.css']
})
export class Hijonivel11Component implements OnInit {

  constructor(private controlEventosService:ControlEventosService) { }

  ngOnInit(): void {
    this.controlEventosService.eventEmitterFunction.subscribe(
      res=> {
        console.log('Soy Hijo1 1 y he recibido: '+res);
      }
    )
  }

  emitir(mensaje:string){
    this.controlEventosService.emitir(mensaje);
  }


}
