import { Component, OnInit } from '@angular/core';
import {TipoEventoService } from 'src/app/servicios/tipoEvento.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { TipoEvento } from '../../modelos/tipoEvento.model';

import Swal from "sweetalert2";

@Component({
  selector: 'app-add-tipo-evento',
  templateUrl: './add-tipo-evento.component.html',
  styleUrls: ['./add-tipo-evento.component.scss'],
  providers: [TipoEventoService]
})
export class AddTipoEventoComponent implements OnInit {
  public token;
  public tipoEventoModelGet: TipoEvento;
  public tipoEventoModel: TipoEvento


  constructor(private _tipoEventoService: TipoEventoService, private _usuarioService: UsuarioService) {
    this.token = _usuarioService.getToken();
    this.tipoEventoModel = new TipoEvento("","",);

   }

  ngOnInit(): void {
    this.obtenerTipoEvento();
  }

  obtenerTipoEvento(){
    this._tipoEventoService.obtenerTipoEvento(this.token).subscribe(
      response => {
        this.tipoEventoModelGet = response.tiposEventoEncontrados
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  crearTipoEvento(){
    this._tipoEventoService.crearTipoEvento(this.tipoEventoModel,this.token ).subscribe(
      response =>{
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: 'Tipo Evento registrado!',
        })
        this.obtenerTipoEvento();
      },
      error =>{
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error',
        })
        console.log(<any>error)
      }
    )
  }



}
