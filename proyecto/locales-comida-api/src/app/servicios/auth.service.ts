import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  estaLoggeado = false;
  roles = [];

  constructor(
    private readonly _router: Router
  ) {}

  login(usuario: string, password: string) {
    if (usuario === 'qwerty' && password === '12345') {
      this.estaLoggeado = true;
      return true;
    } else {
      return false;
    }
  }
  logout() {
    this.estaLoggeado = false;
  }
}
