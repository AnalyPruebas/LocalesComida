import { Injectable } from '@angular/core';
import { ServicioPrincipal } from 'src/app/constantes/clase-generica-service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PedidoService extends ServicioPrincipal {
    path = '/pedido';
    constructor(
        private readonly _httpClients: HttpClient
    ) {
        super(_httpClients);
    }
}
