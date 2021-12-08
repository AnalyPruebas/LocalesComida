import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../../servicios/auth.service';
import {ActivatedRoute} from '@angular/router';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
   formularioLogin: FormGroup;
  @Output() usuario: EventEmitter<any> = new EventEmitter<object | boolean>();
  constructor(
    private readonly _autorizarService: AuthService,
    private readonly _activatedRoute: ActivatedRoute,
  ) {
    this.formularioLogin = new FormGroup({
      nombre: new FormControl({value: '', disabled: false}, [
        Validators.required
      ]),
      password: new FormControl({value: '', disabled: false}, [
        Validators.required
      ]),
    });
  }

  ngOnInit() {
    this.escucharFormulario();
  }

  escucharFormulario() {
    this.formularioLogin.valueChanges
      .pipe(
        debounceTime(3000)
      )
      .subscribe(
        valores => {
          const formularioValido = this.formularioLogin.valid;
          if (formularioValido) {
            const usuarioValido = this._autorizarService.login(
              this.formularioLogin.get('nombre').value, this.formularioLogin.get('password').value);
            if (usuarioValido) {
              this.usuario.emit(valores);
            } else {
              this.usuario.emit(false);
            }
          } else {
            this.usuario.emit(false);
          }
        }
      );
  }
}
