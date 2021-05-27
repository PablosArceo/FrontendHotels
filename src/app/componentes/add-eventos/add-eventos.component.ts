import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventosService } from 'src/app/servicios/eventos.service';
import { HotelesService } from 'src/app/servicios/hoteles.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from "sweetalert2";
import { Router } from '@angular/router';

import {TipoEvento} from '../../modelos/tipoEvento.model';
import { Hotel } from '../../modelos/hotel.model';
import { Evento } from 'src/app/modelos/eventos.model';
import { TipoEventoService } from 'src/app/servicios/tipoEvento.service';


@Component({
  selector: 'app-add-eventos',
  templateUrl: './add-eventos.component.html',
  styleUrls: ['./add-eventos.component.scss'],
  providers: [EventosService, HotelesService, UsuarioService, TipoEventoService]
})
export class AddEventosComponent implements OnInit {
  public eventos;
  public hotelModel: Hotel;
  public token;
  public eventoModel: Evento;
  public idHotelRuta;


  public tipoEventoModelGet: TipoEvento;

  public eventoModelGet: Evento;
  public identidadE

  constructor(public _eventoService: EventosService,
    public _hotelesService: HotelesService,
    public _usuarioService: UsuarioService,
    public _activatedRoute: ActivatedRoute,
    public _tipoEventoService: TipoEventoService,
    private _router: Router

    ) {
      this.token = this._usuarioService.getToken();
      this.eventoModel = new Evento("","","","","","");
      this.obtenerTipoEvento();



   }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta)=>{
      this.idHotelRuta = dataRuta.get('idHotel');
    });
       this.obtenerHotelID(this.idHotelRuta);
        this.getIdentidad();
        this.obtenerEventosPorHotel();



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

  obtenerEventos(){
    this._eventoService.obtenerEventos(this.token).subscribe(
      response => {
        this.eventos = response.eventosEncontrados
      },
      error =>{
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'El id del tipo evento o el id de hotel son incorrectos',
        })
        console.log(<any>error)
        this.obtenerEventos();
        this.obtenerEventosPorHotel();


      }
    )
  }


  obtenerEventosPorHotel(){
    this._eventoService.obtenerEventosPorHotel(this.idHotelRuta, this.token).subscribe(
      response => {
        this.eventoModelGet = response.eventosEncontrados
        console.log(response);
      },
      error=>{
        console.log(<any>error);

      }
    )
  }


  registrarEvento(){
    this._eventoService.registrarEvento(this.idHotelRuta,this.eventoModel,this.token).subscribe(
      response => {
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: 'Evento Registrado',
        })
        this._router.navigate(['/hoteles']);



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
