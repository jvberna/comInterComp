import { Component, OnInit } from '@angular/core';
import { ControlEventosService } from '../servicios/control-eventos.service';

@Component({
  selector: 'app-hijonivel12',
  templateUrl: './hijonivel12.component.html',
  styleUrls: ['./hijonivel12.component.css']
})
export class Hijonivel12Component implements OnInit {

  soy = 'hijo2';
  componentes = ['hijo1','hijo2','padre'];
  ultimoMensaje = '';

  constructor(private controlEventosService:ControlEventosService) { }

  ngOnInit(): void {
    this.controlEventosService.eventEmitterFunction.subscribe(
      res=> {
        const obj = JSON.parse(res);
        if (obj.destinatario === this.soy)
        {
          console.log('Soy '+this.soy+' y he recibo: '+obj.mensaje);
          this.ultimoMensaje = obj.mensaje;
        }
      }
    )
  }

  emitir(mensaje:string, destinatario: string){
    this.controlEventosService.emitir(mensaje, destinatario);
  }

}
