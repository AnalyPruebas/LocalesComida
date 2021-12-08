import { Component, OnInit } from '@angular/core';
import { ComponenteGenerico } from 'src/app/constantes/claase-generica-component';
import { PedidoService } from '../../servicios/pedido.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.sass']
})
export class PedidoComponent extends ComponenteGenerico{

  constructor(
    private readonly _pedidoService: PedidoService,
  ) {
    super(_pedidoService);
  }

}
