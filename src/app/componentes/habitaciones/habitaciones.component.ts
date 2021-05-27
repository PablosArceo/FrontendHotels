import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventosService } from 'src/app/servicios/eventos.service';
import { HotelesService } from 'src/app/servicios/hoteles.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import {HabitacionesService} from 'src/app/servicios/habitaciones.service';
import Swal from "sweetalert2";
import { Evento } from 'src/app/modelos/eventos.model';
import { Habitacion } from 'src/app/modelos/habitacion.model';

import { Hotel } from '../../modelos/hotel.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventos',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.scss'],
  providers: [ HabitacionesService, EventosService, HotelesService, UsuarioService]
})
export class HabitacionesComponent implements OnInit {
  public habitaciones: Habitacion;
  public hoteles;
  public hotelModel: Hotel;
  public token;
  public habitacionModel: Habitacion;
  public idHotelRuta;
  public habitacionModelGet: Habitacion;
  public identidadE;

  constructor( public _habitacionesService: HabitacionesService,
    public _eventosService: EventosService,
    public _hotelesService: HotelesService,
    public _usuarioService: UsuarioService,
    public _activatedRoute: ActivatedRoute,
    private _router: Router

    ) {
      this.token = this._usuarioService.getToken();
      this.habitacionModel = new Habitacion("","",0,"",);
    }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta)=>{
      this.idHotelRuta = dataRuta.get('idHotel');
    })
    this.obtenerHotelID(this.idHotelRuta);
    this.getIdentidad();
    this.obtenerHabitacionHotel();

/* this.obtenerEventos();
 */
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

  obtenerHabitacionHotel(){
    this._habitacionesService.obtenerHabitacionHotel(this.idHotelRuta,this.token).subscribe(
      response => {

        this.habitacionModelGet = response
        console.log(this.habitacionModelGet)
      },
      error =>{
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'El id del tipo evento o el id de hotel son incorrectos',
        })
        console.log(<any>error)

      }
    )
  }

  obtenerHabitacionID(idHabitacion){
    this._habitacionesService.obtenerHabitacionID(this.token, idHabitacion).subscribe(
      response=>{
        this.habitacionModel = response.habitacionEncontrada;
        console.log(response);

      }
    )
  }




  getIdentidad(){

    var identidadHO = JSON.parse(localStorage.getItem('identidad'));
    if(identidadHO!='undefined'){
      this.identidadE = identidadHO
    }else{
      this.identidadE = null;
    }

    return this.identidadE;

  }



  getToken(){
    var token2 = localStorage.getItem('token');
    if(token2 != 'undefined'){
      this.token = token2;
    }else{
      this.token = null;
    }

    return this.token;
  }





}
