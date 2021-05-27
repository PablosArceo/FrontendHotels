import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventosService } from 'src/app/servicios/eventos.service';
import { HotelesService } from 'src/app/servicios/hoteles.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import {ServiciosService } from 'src/app/servicios/servicios.service';
import { Servicio } from 'src/app/modelos/servicios.model';
import Swal from "sweetalert2";
import { Router } from '@angular/router';

import {TipoEvento} from '../../modelos/tipoEvento.model';
import { Hotel } from '../../modelos/hotel.model';
import { Evento } from 'src/app/modelos/eventos.model';


@Component({
  selector: 'app-add-eventos',
  templateUrl: './servicios-all.component.html',
  styleUrls: ['./servicios-all.component.scss'],
  providers: [ServiciosService, HotelesService, UsuarioService]
})
export class ServiciosAllComponent implements OnInit {

  public servicios;

  public hotelModel: Hotel;
  public token;
  public serviciosModel: Servicio;
  public idHotelRuta;
  public identidadE;
  public serviciosModelGet: Servicio



  constructor(public _serviciosService: ServiciosService,
    public _hotelesService: HotelesService,
    public _usuarioService: UsuarioService,
    public _activatedRoute: ActivatedRoute,
    public _router: Router
    ) {
      this.token = this._usuarioService.getToken();
      this.serviciosModel = new Servicio("","",0,"");
      this.hotelModel = new Hotel("","","",0,"")



   }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta)=>{
      this.idHotelRuta = dataRuta.get('idHotel');
    });

    this.obtenerHotelID(this.idHotelRuta);

    this.getIdentidad();
    this.obtenerServicios();
    this.obtenerServiciosPorHotel();



  }

   obtenerHotelID(idHotel) {
    this._hotelesService.obtenerHotelID(this.token, idHotel)
      .subscribe(
        (response) => {
          this.hotelModel = response.hotelEncotrado;
          console.log(response);
        }
      );
  }


  obtenerServiciosPorHotel(){
    this._serviciosService.obtenerServiciosPorHotel(this.idHotelRuta, this.token).subscribe(
      response => {
        this.serviciosModelGet = response.serviciosEncontrados
        console.log(response);
      },
      error=>{
        console.log(<any>error);

      }
    )
  }


  obtenerServicios(){
    this._serviciosService.obtenerServicios(this.token).subscribe(
      response => {
        this.servicios = response.serviciosEncontrados
      },
      error =>{
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Id Hotel incorrecto',
        })
        console.log(<any>error)
      }
    )
  }
  obtenerServiciosID(idServicio){
    this._serviciosService.obtenerServiciosID(this.token, idServicio).subscribe(
      response=>{
        this.serviciosModel = response.servicioEncontrado;
        console.log(response);

      }
    )
  }

  editarServicio(){
    this._serviciosService.editarServicio(this.serviciosModel).subscribe(
      response => {
        console.log(response);
        this.obtenerServiciosPorHotel();
        Swal.fire({
          icon: 'success',
          title: 'Servicio actualizado'

        })
      },
       error =>{
         console.log(<any>error);
       }

    )
  }


  eliminarServicio(idServicio){
    this._serviciosService.eliminarServicio(idServicio).subscribe(
      response => {
        console.log(response);
        this.obtenerServiciosPorHotel();

        Swal.fire({
          icon: 'success',
          title: 'Servicio Eliminado'

        })
      },
       error =>{
         console.log(<any>error);
       }

    )
  }




  getIdentidad(){

    var identidadH = JSON.parse(localStorage.getItem('identidad'));
    if(identidadH!='undefined'){
      this.identidadE = identidadH
    }else{
      this.identidadE = null;
    }

    return this.identidadE;

  }

}
