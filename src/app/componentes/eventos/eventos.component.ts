import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventosService } from 'src/app/servicios/eventos.service';
import { HotelesService } from 'src/app/servicios/hoteles.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from "sweetalert2";
import { Evento } from 'src/app/modelos/eventos.model';
import { Hotel } from '../../modelos/hotel.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
  providers: [EventosService, HotelesService, UsuarioService]
})
export class EventosComponent implements OnInit {
  public eventos;
  public hotelModel: Hotel;
  public token;
  public eventoModel: Evento;
  public idHotelRuta;
  public eventoModelGet: Evento;
  public identidadE;

  constructor(public _eventosService: EventosService,
    public _hotelesService: HotelesService,
    public _usuarioService: UsuarioService,
    public _activatedRoute: ActivatedRoute,
    private _router: Router

    ) {
      this.token = this._usuarioService.getToken();
      this.eventoModel = new Evento("","","","","","");
    }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta)=>{
      this.idHotelRuta = dataRuta.get('idHotel');
    })
    this.obtenerHotelID(this.idHotelRuta);
    this.getIdentidad();
    this.obtenerEventosPorHotel();

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

 obtenerEventosPorHotel(){
    this._eventosService.obtenerEventosPorHotel(this.idHotelRuta,this.token).subscribe(
      response => {
        this.eventoModelGet = response.Eventoencontrado
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


/*   obtenerEventosPorHotel(){
    this._eventosService.obtenerEventosPorHotel(this.idHotelRuta,this.token).subscribe(
      response => {
        this.eventoModelGet = response.eventosEncontrados
        console.log(response);
      },
      error=>{
        console.log(<any>error);

      }
    )
  } */

  getIdentidad(){

    var identidadHO = JSON.parse(localStorage.getItem('identidad'));
    if(identidadHO!='undefined'){
      this.identidadE = identidadHO
    }else{
      this.identidadE = null;
    }

    return this.identidadE;

  }

  registrarEvento(){
    this._eventosService.registrarEvento(this.idHotelRuta,this.eventoModel,this.token).subscribe(
      response => {
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: 'Evento Registrado',
        })
/*         this.obtenerEventosPorHotel();
 */      },
      error=>{
        console.log(<any>error);

      }
    )
  }

  obtenerEventosID(idEvento){
    this._eventosService.obtenerEventosID(this.token, idEvento).subscribe(
      response=>{
        this.eventoModel = response.eventoEncontrado;
        console.log(response);

      }
    )
  }

  editarEvento(){
    this._eventosService.editarEvento(this.eventoModel).subscribe(
      response => {
        console.log(response);
        this.obtenerEventosPorHotel();
        Swal.fire({
          icon: 'success',
          title: 'Evento actualizado'

        })
      },
       error =>{
         console.log(<any>error);
       }

    )
  }

  eliminarEvento(idEvento){
    this._eventosService.eliminarEvento(idEvento).subscribe(
      response => {
        console.log(response);
         this.obtenerEventosPorHotel();

        Swal.fire({
          icon: 'success',
          title: 'Evento Eliminado'

        })

      },
       error =>{
         console.log(<any>error);
       }

    )
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
