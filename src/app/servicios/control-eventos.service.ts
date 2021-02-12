import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlEventosService {

  eventEmitterFunction = new EventEmitter();
  constructor() { }

  // Con esta funcion se puede emitir un evento con mensaje que se quiera
  emitir(mensaje:string) {
    this.eventEmitterFunction.emit(mensaje);
  }
}
