import io from 'socket.io-client';
import {Injectable, OnInit} from '@angular/core';
import {serialize} from '@angular/compiler/src/i18n/serializers/xml_helper';

@Injectable()
export class WebSocketService implements OnInit {
  private readonly socketProducto = io('http://localhost:3001');

  iniciarSocker() {
    this.socketProducto.on('cliente', (respuesta) => {
      console.log('respuesta');
    });
  }

  ngOnInit(): void {
    this.iniciarSocker();
  }
  enviarProducto(producto) {
    this.socketProducto.emit(producto.id, producto, (res) => {
      console.log(res); // mensaje enviado
    });
  }
}
