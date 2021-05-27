import { Component, OnInit } from '@angular/core';
import {TipoEventoService } from 'src/app/servicios/tipoEvento.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { TipoEvento } from '../../modelos/tipoEvento.model';

import Swal from "sweetalert2";

@Component({
  selector: 'app-tipo-eventos',
  templateUrl: './tipo-eventos.component.html',
  styleUrls: ['./tipo-eventos.component.scss']
})
export class TipoEventosComponent implements OnInit {
  public token;
  public tipoEventoModelGet: TipoEvento;
  public tipoEventoModel: TipoEvento
  public identidadH;



  constructor(private _tipoEventoService: TipoEventoService, private _usuarioService: UsuarioService) {
    this.token = _usuarioService.getToken();
    this.tipoEventoModel = new TipoEvento("","",);

   }

  ngOnInit(): void {
    this.obtenerTipoEvento();
    this.getIdentidad();

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

  obtenerTipoEventoID(idTipoEvento){
    this._tipoEventoService.obtenerTipoEventoID(this.token, idTipoEvento).subscribe(
      response=>{
        this.tipoEventoModel = response.tiposEventoEncontrados;

        console.log(response);
        this.obtenerTipoEvento();


      }
    )
  }

  editarTipoEvento(){
    this._tipoEventoService.editarTipoEvento(this.tipoEventoModel).subscribe(
      response => {
        console.log(response);
        this.obtenerTipoEvento();

        Swal.fire({
          icon: 'success',
          title: 'Tipo Evento actualizado'

        })
      },
       error =>{
         console.log(<any>error);
       }

    )
  }

  eliminarTipoEventoEvento(idTipoEvento){
    this._tipoEventoService.eliminarTipoEventoEvento(idTipoEvento).subscribe(
      response => {
        console.log(response)
        this.obtenerTipoEvento();

        Swal.fire({
          icon: 'success',
          title: 'Tipo Evento Eliminado'


        })
      },
       error =>{
         console.log(<any>error);
       }

    )
  }


  getIdentidad(){

    var identidadHo = JSON.parse(localStorage.getItem('identidad'));
    if(identidadHo!='undefined'){
      this.identidadH = identidadHo
    }else{
      this.identidadH = null;
    }

    return this.identidadH;

  }



}
