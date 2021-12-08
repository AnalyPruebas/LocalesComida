import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { ServicioPrincipal } from 'src/app/constantes/clase-generica-service';

@Injectable()
export class LugarService extends ServicioPrincipal {
    path = '/lugar';
    constructor(
        private readonly _httClient: HttpClient
    ) {
        super(_httClient);
    }
}
