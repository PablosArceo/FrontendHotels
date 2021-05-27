import { Component, OnInit } from '@angular/core';
import {FacturaService } from 'src/app/servicios/factura.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Factura } from '../../modelos/factura.model';

import Swal from "sweetalert2";

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',

  styleUrls: ['./facturas.component.scss']
})
export class FacturasComponent implements OnInit {
  public token;
  public facturaModelGet: Factura;
  public facturaModel: Factura
  public identidadH;



  constructor(private _facturaService: FacturaService, private _usuarioService: UsuarioService) {
    this.token = _usuarioService.getToken();
    this.facturaModel = new Factura("","","",0);

   }

  ngOnInit(): void {
    this.obtenerFactura();
    this.getIdentidad();

  }

  obtenerFactura(){
    this._facturaService.obtenerFactura(this.token).subscribe(
      response => {
        this.facturaModelGet = response.facturaEncontrada
      },
      error => {
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
