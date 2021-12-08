import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstaLoggeadoService implements CanActivate {
  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const estaLoggeado = this._authService.estaLoggeado;
    if (estaLoggeado) {
      return true;
    } else {
      const url = ['/inicio', 'login'];
      alert('No tienes permiso');
      this._router.navigate(url);
      return false;
    }
  }
}
