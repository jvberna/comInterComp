import { Component, OnInit } from '@angular/core';
import { ControlEventosService } from '../servicios/control-eventos.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  soy = 'padre';
  componentes = ['hijo1','hijo2','padre'];
  ultimoMensaje = '';

  constructor( private controlEventosService:ControlEventosService ) { }

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
