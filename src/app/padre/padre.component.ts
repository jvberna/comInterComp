import { Component, OnInit } from '@angular/core';
import { ControlEventosService } from '../servicios/control-eventos.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  constructor( private controlEventosService:ControlEventosService ) { }

  ngOnInit(): void {
    this.controlEventosService.eventEmitterFunction.subscribe(
      res=> {
        console.log('Soy Padre y he recibido: '+res);
      }
    )
  }

  emitir(mensaje:string){
    this.controlEventosService.emitir(mensaje);
  }

}
