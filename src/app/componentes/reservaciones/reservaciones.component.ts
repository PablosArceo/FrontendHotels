import { Component, OnInit } from '@angular/core';
import { ReservacionService } from 'src/app/servicios/reservacion.service';
import { ActivatedRoute } from '@angular/router';

import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Reservacion } from '../../modelos/reservacion.model';
import {ServiciosService } from 'src/app/servicios/servicios.service';
import { Servicio } from 'src/app/modelos/servicios.model';
import Swal from "sweetalert2";

@Component({
  selector: 'app-tus-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.scss'],
  providers: [ReservacionService, UsuarioService]
})
export class ReservacionesComponent implements OnInit {

  public token;
  public reservacionModelGet: Reservacion;
  public idHabitacionRuta;

  constructor(private _reservacionService: ReservacionService, public _usuarioService: UsuarioService, private _activatedRoute: ActivatedRoute,
    public _serviciosService: ServiciosService) {
    this.token = _usuarioService.getToken();
   }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta=>{
      this.idHabitacionRuta = dataRuta.get('idHabitacion');
    }))
    this.obtenerReservacionesGerente();
  }

  obtenerReservacionesGerente(){
    this._reservacionService.obtenerReservacionesGerente(this.idHabitacionRuta,this.token).subscribe(
      response=>{

        console.log(response);
        this.reservacionModelGet = response.reservacionesEncontradas;

      },
      error =>{
        console.log(<any>error);

      }
    )
  }

  eliminarReservacion(idReservacion){

    this._reservacionService.eliminarReservacion(idReservacion,this.token).subscribe(
      response =>{
        console.log(response);
        this.reservacionModelGet = response.reservacionesEncontradas;

      },
      error=>{

      }
    )

  }

}
