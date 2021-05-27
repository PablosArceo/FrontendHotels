import { Component, OnInit } from '@angular/core';
import { ReservacionService } from 'src/app/servicios/reservacion.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Reservacion } from '../../modelos/reservacion.model';
import {ServiciosService } from 'src/app/servicios/servicios.service';
import { Servicio } from 'src/app/modelos/servicios.model';
import { ActivatedRoute } from '@angular/router';
import { HotelesService } from 'src/app/servicios/hoteles.service';

import { Router } from '@angular/router';

import Swal from "sweetalert2";
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-tus-reservaciones',
  templateUrl: './reservacion-cliente.component.html',
  styleUrls: ['./reservacion-cliente.component.scss'],
  providers: [ReservacionService, UsuarioService]
})
export class ReservacionClienteComponent implements OnInit {
/*   idReservacion: Reservacion;
 */  actualizarServicio;

  public idHotelRuta;
  public hoteles;

  public idHotel;
  public idReservacion;

  public idHabitacion;

  public servicios;
  public token;
  public reservacionModelGet: Reservacion;
  public serviciosModelGet: Servicio;

  constructor(private _reservacionService: ReservacionService, public _usuarioService: UsuarioService,    public _hotelesService: HotelesService,

    public _activatedRoute: ActivatedRoute,
    public _router: Router,
    public _serviciosService: ServiciosService) {
    this.actualizarServicio = new Servicio("","",0,"")
    this.actualizarServicio = new Servicio("","",0,"")

    this.token = _usuarioService.getToken();
   }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta)=>{
      this.idHotelRuta = dataRuta.get('idHotel');
    });
/*     this.serviciosHotel(this.idHotel, this.idReservacion);
*/
    this.obtenerReservacionesPorCliente()
    this.hotelServicios(this.idHabitacion);
/*     this.obtenerServiciosPorHotel()
 *//*
 */
  }

  obtenerReservacionesPorCliente(){

    this._reservacionService.obtenerReservacionesPorCliente(this.token).subscribe(
      response =>{
        console.log(response);
        this.reservacionModelGet = response.reservacionesEncontradas
      },
      error=>{
        console.log(<any>error);

      }
    )

  }

  eliminarReservacion(idReservacion){

    this._reservacionService.eliminarReservacion(idReservacion,this.token).subscribe(
      response =>{
        console.log(response);
        this.obtenerReservacionesPorCliente()
        Swal.fire({
          icon: 'success',
          title: 'Reservación eliminada con exito',
        })

      },
      error=>{
        console.log(<any>error);

        Swal.fire({
          icon: 'error',
          title: 'No se pudo eliminar la Reservación',
        })
      }
    )

  }


  servicioPorReservacion(){
    console.log(this.idReservacion)
    console.log(this.actualizarServicio._id)
    this._serviciosService.servicioPorReservacion(this.idReservacion, this.actualizarServicio._id).subscribe(

      response =>{

        console.log(response)
        this.obtenerReservacionesPorCliente()
        Swal.fire({
          icon: 'success',
          title: 'Servicio Agregado a su reservacion!',
        })
      },
       error=>{
        console.log(<any>error);

        Swal.fire({
          icon: 'error',
          title: 'Error al agregar el servicio a su reservacio',
        })
      }

    )

  }

/*  obtenerServiciosPorHotel(){
    this._reservacionService.obtenerServiciosPorHotel(this.idHotelRuta, this.token).subscribe(
      response => {
        this.serviciosModelGet = response.serviciosEncontrados
        console.log(response);
      },
      error=>{
        console.log(<any>error);

      }
    )
  } */

/*   serviciosHotel(idHotel, idReservacion){
    this._serviciosService.serviciosHotel(idHotel).subscribe(

      response=>{
        this.idReservacion = idReservacion;
        console.log(this.idReservacion);
        console.log(response);
        this.servicios = response
      }
    )

  } */

  hotelServicios(idHabitacion){
    this._reservacionService.hotelServicios(idHabitacion).subscribe(

      response=>{
        //;
        this.idReservacion = idHabitacion;
        console.log(this.idReservacion);
        console.log(response)
        this.serviciosModelGet= response

      }
    )

  }



}
