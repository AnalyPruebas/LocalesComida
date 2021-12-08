import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {LugarComidaComponent} from '../../componentes/listar-lugar-comida/lugar-comida.component';
import {LugarComidaService} from '../../servicios/lugar-comida.servicio';

@Component({
  selector: 'app-modal-crear-editar',
  templateUrl: './modal-crear-editar.component.html',
  styleUrls: ['./modal-crear-editar.component.sass']
})
export class ModalCrearEditarComponent implements OnInit {
  tituloModal = '';
  lugarComidaCrearEditar;

  constructor(
    private readonly _dialogRef: MatDialogRef<LugarComidaComponent>,
    @Inject(MAT_DIALOG_DATA) private readonly _data,
  ) { }

  ngOnInit() {
    if (!this._data) {
      this.tituloModal = 'Crear lugar comida';
      console.info('crear');
    } else {
      this.tituloModal = 'Editar lugar comida';
      // console.info('editar', this._data);
    }
  }

  cancelarModal() {
    console.log('cancelar');
    this._dialogRef.close();
  }

  enviarDatosFormulario() {
    /*console.log('enviar');
    if (this.lugarComidaCrearEditar) {
      if (this.tituloModal === 'Crear lugar comida') {
//        this._lugarComidaService.guardar(this.lugarComidaCrearEditar);
      } else {
        const idLugarComida = this.lugarComidaCrearEditar.id as number;
        console.info('id ', idLugarComida, 'lugar', this.lugarComidaCrearEditar);
//        this._lugarComidaService.update(idLugarComida, this.lugarComidaCrearEditar);
      }
    }*/
    this._dialogRef.close(this.lugarComidaCrearEditar);
  }

  crearEditar(lugarComida: any) {
    console.log('crearEditar ', lugarComida);
    if (!lugarComida) {
      this.lugarComidaCrearEditar = undefined;
    } else {
      this.lugarComidaCrearEditar = lugarComida as object;
    }
  }
}
