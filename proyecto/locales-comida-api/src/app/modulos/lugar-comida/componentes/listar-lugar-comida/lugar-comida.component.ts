import {Component, Input, OnInit} from '@angular/core';
import { LugarComidaService } from '../../servicios/lugar-comida.servicio';
import {MatDialog} from '@angular/material';
import {ModalCrearEditarComponent} from '../../modales/modal-crear-editar/modal-crear-editar.component';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {of} from 'rxjs';
import {map} from 'rxjs/operators';
import {ParametrosInterface, QueryInterface} from '../../../../interfaces/parametros.interface';

@Component({
  selector: 'app-lugar-comida',
  templateUrl: './lugar-comida.component.html',
  styleUrls: ['./lugar-comida.component.sass']
})
export class LugarComidaComponent implements OnInit {
  take = 5;
  parametrosUrl;
  @Input() arregloLugares = [];
  cols = [
    {field: 'nombre', header: 'nombre'},
    {field: 'direccion', header: 'Direccion'},
    {field: 'reserva', header: 'reserva'},
    {field: 'espacio', header: 'espacio'},
    {field: 'tipo', header: 'tipo'},
    {field: 'id', header: 'acciones'},
  ];
  registrosTotales: number;
  formularioBuscar: FormGroup;

  constructor(
    private readonly _lugarComidaService: LugarComidaService,
    private readonly _dialog: MatDialog,
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
  ) {
    this.formularioBuscar = new FormGroup({
      busqueda: new FormControl({value: '', disabled: false}, [
        Validators.minLength(1)
      ])
    });
  }

  ngOnInit() {
    const parametros$ = of(this._activatedRoute);
    parametros$.pipe(
      map(
        (parametros: any) => {
          const queryParams = parametros.queryParams.value;
          const routeParams = parametros.params.value;

          return ({queryParams, routeParams});
        }
      )
    ).subscribe(
      (parametros) => {
        console.log('oninit parametr', parametros.queryParams.skip);
        this.parametrosUrl = {
          queryParams: {
            where: parametros.queryParams.where ? JSON.parse(parametros.queryParams.where) : {},
            skip: parametros.queryParams.skip ? +parametros.queryParams.skip : 0
          },
          routeParams: parametros.routeParams
        };
        console.log('oninit parametr', parametros.queryParams.skip);
        // this.parametrosUrl = parametros;
        // this.parametrosUrl.queryParams.skip = this.parametrosUrl.queryParams.skip ? this.parametrosUrl.queryParams.skip : 0;
        console.log('on init',  (this.parametrosUrl));
      }
    );
  }
  cargarMasDatos(evento) {
    console.log('evento paginacion', evento);

    const queryParam = {
      where: this.parametrosUrl.queryParams.where,
      skip: evento.first,
      take: 5,
      order: {
        id: 'DESC'
      }
    };
    // this.parametrosUrl.queryParams.skip = +evento.first;
    console.log('qp', queryParam);
    this._lugarComidaService.buscarParametros(JSON.stringify(queryParam))
      .subscribe(
        (res: any) => {
          this.arregloLugares = res[0];
          this.registrosTotales = res[1];
          this._router.navigate(
            [],
            {queryParams: {
                skip: queryParam.skip,
                take: queryParam.take,
              }
            }
          );
          this.parametrosUrl = {
            queryParams: {
              where: this.parametrosUrl.queryParams.where,
              skip: queryParam.skip,
              take: this.parametrosUrl.queryParams.take
            },
            routeParams: this.parametrosUrl.routeParams,
          };
        },
        error => {
          console.error(error);
        }
      );
    // this.parametrosUrl.queryParams.skip = evento.first;
    this.listarLugares();
  }

  listarLugares(evento?) {

    // if (evento) {
      const consulta = {
        // where: this.parametrosUrl.queryParams.where,
        where: this.parametrosUrl.queryParams.where,
        skip: this.parametrosUrl.queryParams.skip,
        take: this.take,
      };
      console.log('cons'  , consulta);
      this._lugarComidaService.buscarParametros(JSON.stringify(consulta))
        .subscribe(
          (respuesta: any) => {
            this.arregloLugares = respuesta[0];
            this.registrosTotales = respuesta[1];
            this._router.navigate(
              [],
              {queryParams: {
                  where: JSON.stringify(this.parametrosUrl.queryParams.where),
                  skip: this.parametrosUrl.queryParams.skip,
                }
              }
            );
          },
          error => {
            console.error('error del servidor ', error);
          }
        );
    // }
  }

  cambiarEstado(lugarComida) {
    const idLugarComida = lugarComida.id as number;
    const nuevoEstado = !lugarComida.reserva;
    const lugarComidaActualizar = {
      reserva: nuevoEstado
    };
    this._lugarComidaService.update(idLugarComida, lugarComidaActualizar)
      .subscribe(
        respuestaActualizar => {
          lugarComida.reserva = nuevoEstado;
          this.listarLugares();
        },
        error => {
          console.error('error del servidor', error);
        }
      );
  }


  abrirModalCrear() {
    const modalCrearLugarCiudad = this._dialog.open(ModalCrearEditarComponent, {
      width: '500px',
      data: false,
    });
    modalCrearLugarCiudad
      .afterClosed()
      .subscribe(
        respuestaModal => {
          this._lugarComidaService.guardar(respuestaModal)
            .subscribe(respuesta => {
              this.listarLugares();
            }, error => {
              console.error('error del servidor g', error);
            });
        },
        error => {
          console.error('error modal', error);
        }
      );
  }

  abrirModalEditar(lugarComidaFila) {
    const modalEditarLugarComida = this._dialog.open(ModalCrearEditarComponent, {
      width: '500px',
      data: lugarComidaFila,
    });
    modalEditarLugarComida
      .afterClosed()
      .subscribe(
        respuestaModal => {
          const idLugarComida = respuestaModal.id as number;
          this._lugarComidaService.update(idLugarComida, respuestaModal)
            .subscribe(
              respuesta => {
                this.listarLugares();
              }, error => {
                console.error('error del servidor e', error);
              }
            );
        },
        error => {
          console.error('error modal', error);
        }
      );
  }

  buscar() {
    let busqueda = this.formularioBuscar.get('busqueda').value;
    if (busqueda === '' || busqueda === undefined) {
      // this.listarLugares();
    } else {
      console.log(busqueda);
      busqueda = busqueda.trim();
      this.parametrosUrl.queryParams.where = {
        nombre: `${busqueda}`,
        // direccion: `${busqueda}`
      };
      this.parametrosUrl.queryParams.skip = 0;
      const queryParam = {
        where: JSON.stringify(this.parametrosUrl.queryParams.where),
        skip: this.parametrosUrl.queryParams.skip,
        take: 5,
        order: {
          id: 'DESC'
        }
      };
      console.log('qp', queryParam);
      this._router.navigate(
        ['/lugar-comida-modulo'],
        {queryParams: {
          where: queryParam.where,
            skip: queryParam.skip,
            take: queryParam.take
          }}
      );
    }

  }
}
