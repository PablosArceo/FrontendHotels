import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


import { HotelesService } from 'src/app/servicios/hoteles.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Hotel } from '../../modelos/hotel.model';
import  Swal from "sweetalert2";


@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.scss'],

  providers: [HotelesService, UsuarioService]
})
export class HotelesComponent implements OnInit {

  public hoteles;

  public hotelModel: Hotel;
  public idHotel;

  public identidadH;


  // public hotelModelObtener: Hotel;

  public token;

  constructor(public _hotelesService: HotelesService, public _usuarioService: UsuarioService,
    public _activatedRoute: ActivatedRoute

    ) {
    this.token = _usuarioService.getToken();
    this.hotelModel = new Hotel("","","",0,"")
   }

  ngOnInit(): void {

    this.obtenerHoteles();
    this.getIdentidad();

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

  obtenerHoteles(){
    this._hotelesService.obtenerHoteles(this.token).subscribe(
      response => {
        this.hoteles = response.hotelesEncontrados
      },
      error =>{
        console.log(<any>error);

      }
    )
  }

  obtenerHotelID(idHotel){
    this._hotelesService.obtenerHotelID(this.token, idHotel).subscribe(
      response=>{
        this.hotelModel = response.hotelEncontrado;
        console.log(response);

      }
    )
  }

  editarHotel(){
    this._hotelesService.editarHotel(this.hotelModel).subscribe(
      response => {
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: 'Hotel actualizado'

        })
      },
       error =>{
         console.log(<any>error);
       }

    )
  }
  eliminarHotel(idHotel){
    this._hotelesService.eliminarHotel(idHotel).subscribe(
      response => {
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: 'Hotel Eliminado'

        })
      },
       error =>{
         console.log(<any>error);
       }

    )
  }

/*   editarHotel(){
    this.hotelModel = this.identidadH;
    this._hotelesService.editarHotel(this.hotelModel).subscribe(
    response => {
      console.log(response);
      Swal.fire({
        icon: 'success',
        title: 'Hotel actualizado'

      })
    },
     error =>{
       console.log(<any>error);
     }
    )

  } */








}

