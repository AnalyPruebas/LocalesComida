import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ARREGLO_ESPACIO_LUGAR, ARREGLO_TIPO_LUGAR} from '../../../../constantes/arreglos';
import {ActivatedRoute} from '@angular/router';
import {debounceTime} from 'rxjs/operators';
import {ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-crear-editar-lugar-com',
  templateUrl: './crear-editar-lugar-com.component.html',
  styleUrls: ['./crear-editar-lugar-com.component.sass']
})
export class CrearEditarLugarComComponent implements OnInit {

  formularioLugarComida: FormGroup;
  @Output() lugarComidaCrearEditar: EventEmitter<any> = new EventEmitter<object | boolean>();
  @Input() lugarComida;
  espacios = ARREGLO_ESPACIO_LUGAR;
  tipos = ARREGLO_TIPO_LUGAR;
  arregloMensajesErrorCampoNombre: string[] = [];
  arregloMensajesErrorCampoDireccion: string[] = [];
  arregloMensajesErrorCampoReserva: string[] = [];
  mensajeErrorCampoNombre = {
    required: 'El campo nombre es requerido',
    minLength: 'El campo nombre debe tener minimo 3 caracteres'
  };
  mensajeErrorCampoDireccion = {
    required: 'El campo direccion es requerido',
    minLength: 'El campo direccion debe tener minimo 5 caracteres'
  };
  mensajeErrorCampoReserva = {
    required: 'El campo nombre es requerido'
  };

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _toasterService: ToasterService,
  ) {
    this.formularioLugarComida = new FormGroup({
      nombre: new FormControl({value: '', disabled: false}, [
        Validators.required,
        Validators.minLength(3)
      ]),
      direccion: new FormControl({value: '', disabled: false}, [
        Validators.minLength(5)
      ]),
      reserva: new FormControl({value: '', disabled: false}, [
        Validators.required
      ]),
      espacio: new FormControl(),
      tipo: new FormControl(),
      id: new FormControl(),
    });
  }

  ngOnInit() {
    console.info('input', this.lugarComida);
    if (this.lugarComida) {
      this.formularioLugarComida.get('nombre').patchValue(this.lugarComida.nombre);
      this.formularioLugarComida.get('direccion').patchValue(this.lugarComida.direccion);
      this.formularioLugarComida.get('reserva').patchValue(this.lugarComida.reserva);
      this.formularioLugarComida.get('espacio').patchValue(this.lugarComida.espacio);
      this.formularioLugarComida.get('tipo').patchValue(this.lugarComida.tipo);
      this.formularioLugarComida.get('id').patchValue(this.lugarComida.id);
    }
    this.escucharFormulario();
    this.escucharCampoNombre();
    this.escucharCampoDireccion();
    this.escucharCampoReserva();
  }
  llenarMensajesErrorCampoNombre(controlNameNombre: AbstractControl) {
    this.arregloMensajesErrorCampoNombre = [];
    if (controlNameNombre.dirty || controlNameNombre.touched || controlNameNombre.errors) {
      if (controlNameNombre.errors) {
        this.arregloMensajesErrorCampoNombre = Object.keys(controlNameNombre.errors).map(llave => {
          return this.mensajeErrorCampoNombre[llave];
        });
      }
    }
  }
  llenarMensajesErrorCampoDireccion(controlNameNombre: AbstractControl) {
    this.arregloMensajesErrorCampoNombre = [];
    if (controlNameNombre.dirty || controlNameNombre.touched || controlNameNombre.errors) {
      if (controlNameNombre.errors) {
        this.arregloMensajesErrorCampoDireccion = Object.keys(controlNameNombre.errors).map(llave => {
          return this.mensajeErrorCampoDireccion[llave];
        });
      }
    }
  }
  llenarMensajesErrorCampoReserva(controlNameNombre: AbstractControl) {
    this.arregloMensajesErrorCampoReserva = [];
    if (controlNameNombre.dirty || controlNameNombre.touched || controlNameNombre.errors) {
      if (controlNameNombre.errors) {
        this.arregloMensajesErrorCampoReserva = Object.keys(controlNameNombre.errors).map(llave => {
          return this.mensajeErrorCampoReserva[llave];
        });
      }
    }
  }


  escucharFormulario() {
    this.formularioLugarComida.valueChanges
      .pipe(
        debounceTime(3000)
      )
      .subscribe(valoresFormulario => {
        const formularioValido = this.formularioLugarComida.valid;
        if (formularioValido) {
          this._toasterService.pop('info', 'correcto', 'El formulario es valido');
          // console.info('f correcto', valoresFormulario);
          this.lugarComidaCrearEditar.emit(valoresFormulario);
        } else {
          this._toasterService.pop('warning', 'incorrecto', 'El formulario tiene errores');
          this.lugarComidaCrearEditar.emit(false);
        }
      });
  }


  escucharCampoNombre() {
    const campoNombre$ = this.formularioLugarComida.get('nombre');
    campoNombre$
      .valueChanges
      .pipe(
      )
      .subscribe(nombre => {
        this.llenarMensajesErrorCampoNombre(this.formularioLugarComida.get('nombre'));
      });
  }

  escucharCampoDireccion() {
    const campoNombre$ = this.formularioLugarComida.get('direccion');
    campoNombre$
      .valueChanges
      .pipe(
      )
      .subscribe(direccion => {
        this.llenarMensajesErrorCampoDireccion(this.formularioLugarComida.get('direccion'));
      });
  }
  escucharCampoReserva() {
    const campoNombre$ = this.formularioLugarComida.get('reserva');
    campoNombre$
      .valueChanges
      .pipe(
      )
      .subscribe(reserva => {
        this.llenarMensajesErrorCampoReserva(this.formularioLugarComida.get('reserva'));
      });
  }
}
