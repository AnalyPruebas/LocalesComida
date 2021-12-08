import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { ProductoWebsocketInterface } from '../interfaces/producto-websocket.interface';

@WebSocketGateway(3001)
export class ProductoWsGateway {
  @SubscribeMessage('producto')
  producto(socket: any, payload: any) {
    // socket.join(payload.idProducto);
    // socket.to(payload.idProducto).emit('cliente', payload);
    // la nueva cantidad del producto
    socket.broadcast.emit('front', payload);
    return 'OK ws';
  }
  @SubscribeMessage('cliente')
  cliente(socket: any, payload: any) {
    console.log('cantidad ws');
    return payload.cantidad;
    // la nueva cantidad del producto
  }
}
