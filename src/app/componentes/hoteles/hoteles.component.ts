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

    this.getIdentidad();
    this.obtenerHoteles();


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
        this.obtenerHoteles();


      }
    )
  }

 /*  obtenerHoteles(){
    this._hotelesService.obtenerHoteles(this.token).subscribe(
      response => {
        this.hoteles = response.hotelesEncontrados
      },
      error =>{
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'El id del tipo evento o el id de hotel son incorrectos',
        })
        console.log(<any>error)
        this.obtenerHoteles();

      }
    )
  } */

  obtenerHotelID(idHotel){
    this._hotelesService.obtenerHotelID(this.token, idHotel).subscribe(
      response=>{
        this.hotelModel = response.hotelEncontrado;
        console.log(response);

      }
    )
  }
// CRUD ADMIN
  editarHotel(){
    this._hotelesService.editarHotel(this.hotelModel).subscribe(
      response => {
        console.log(response);
        this.obtenerHoteles();

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
        this.obtenerHoteles();

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

  ////////////////////////////////////////////////////////////////

  // CRUD GERENTE

  editarHotelGerente(){
    this._hotelesService.editarHotelGerente(this.hotelModel).subscribe(
      response => {
        console.log(response);
        this.obtenerHoteles();

        Swal.fire({
          icon: 'success',
          title: 'Hotel actualizado'

        })
      },
      error =>{
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'El gerente no posee los permisos del hotel seleccionado',
        })
        console.log(<any>error)
      }

    )
  }


  eliminarHotelGerente(idHotel){
    this._hotelesService.eliminarHotelGerente(idHotel).subscribe(
      response => {
        console.log(response);
        this.obtenerHoteles();

        Swal.fire({
          icon: 'success',
          title: 'Hotel Eliminado'

        })
      },
      error =>{
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'El gerente no posee los permisos del hotel seleccionado',
        })
        console.log(<any>error)
      }

    )
  }

////////////////////////////////////////////////////////////////






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

