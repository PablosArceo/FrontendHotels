import { Component, OnInit } from '@angular/core';
import { HotelesService } from 'src/app/servicios/hoteles.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Hotel } from '../../modelos/hotel.model';
import { Usuario } from '../../modelos/usuario.model';
import Swal from "sweetalert2";
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-hotel',
  templateUrl: './agregar-hotel.component.html',
  styleUrls: ['./agregar-hotel.component.scss'],
  providers: [HotelesService, UsuarioService]
})
export class AgregarHotelComponent implements OnInit {

  public hotelModel: Hotel;
  public usuarioModelGet: Usuario;

  constructor(private _hotelesService: HotelesService, private _usuarioService: UsuarioService, private _router: Router) {
    this.hotelModel = new Hotel("","","",0,"")
  }

  ngOnInit(): void {
    this.obtenerGerentes();
  }

  nuevoHotel(){
    this._hotelesService.nuevoHotel(this.hotelModel).subscribe(
      response =>{
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: 'Hotel registrado!',
        })
        this._router.navigate(['/hoteles']);
      },
      error =>{
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'El gerente ingresado no existe',
        })
        console.log(<any>error)
      }
    )
  }

  obtenerGerentes(){
    this._usuarioService.obtenerGerentes().subscribe(
      response =>{
        this.usuarioModelGet = response.usuariosEncontrados;
      },
      error =>{
        console.log(<any>error);
      }
    )
  }

}
