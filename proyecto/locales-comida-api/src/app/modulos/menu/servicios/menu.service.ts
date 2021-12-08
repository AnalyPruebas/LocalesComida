import { Injectable } from '@angular/core';
import { ServicioPrincipal } from 'src/app/constantes/clase-generica-service';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class MenuService extends ServicioPrincipal {
    path = '/menu';
    constructor(
        private readonly _httClient: HttpClient
    ) {
        super(_httClient);
    }
    
}
