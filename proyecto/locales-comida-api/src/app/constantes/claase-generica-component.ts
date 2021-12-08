import { OnInit } from '@angular/core';
import { ServicioPrincipal } from './clase-generica-service';


export class ComponenteGenerico implements OnInit {

  arreglo = [];
  cols = [];
  registrosTotales: number;

  constructor(
    private readonly _entidadService: ServicioPrincipal,
    // private readonly _dialog: MatDial
  ) { }

  ngOnInit() {
    this.listar();
  }
  cargarMasDatos(evento) {
    console.log('evento paginacion', evento);
    this._entidadService.obtenerTodos(evento.first,3)
      .subscribe(
        (res: any) => {
          this.arreglo = res[0];
        },
        error => {
          console.error(error)
        }
      );
  }
  listar() {
    this._entidadService.obtenerTodos(0,3)
      .subscribe(
        (res: any) => {
          // console.info('respuesta', res);
          this.arreglo = res[0];
          this.registrosTotales = res[1];
        },
        error => {
          console.error(error)
        }
      );
  }

  cambiarEstado(objeto) {
    const idCiudad = objeto.id as number;
    const nuevoEstado = !objeto.habilitado;
    // console.log('nuevo', nuevoEstado);
    const ciudadActualizar = {
      habilitado: nuevoEstado
    };
    this._entidadService.update(idCiudad, ciudadActualizar)
      .subscribe(
        respuestaActualizar => {
          // console.log('todo bien', respuestaActualizar);
          // this.listarCiudades();
          objeto.habilitado = nuevoEstado;
          this.listar();
        },
        error => {
          console.error('error del servidor', error)
        }
      )
  }



}
