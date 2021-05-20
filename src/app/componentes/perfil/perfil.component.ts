import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Usuario } from 'src/app/modelos/usuario.model';
import  Swal from "sweetalert2";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
    public usuarios;
    public idUsuario;

  public usuarioModel: Usuario;
  public identidadPerfil;

  constructor(public _usuarioService: UsuarioService, private _router: Router) {
    this.usuarioModel = new Usuario("","","","","","","","");
  }

  ngOnInit(): void {
    this.usuarioModel = this.getIdentidad()


  }

  editarUsuarioAdmin(){
    this.usuarioModel = this.identidadPerfil;
    this._usuarioService.editarUsuarioAdmin(this.usuarioModel).subscribe(
    response => {
      console.log(response);
      Swal.fire({
        icon: 'success',
        title: 'Usuario actualizado'

      })
    },
     error =>{
       console.log(<any>error);
     }
    )

  }
  eliminarUsuarioAdmin(idUsuario){
    this._usuarioService.eliminarUsuarioAdmin(idUsuario).subscribe(
      response => {
        console.log(<any>response);
        Swal.fire({
        icon: 'success',
        title: 'Usuario eliminado'
        }),
        localStorage.clear();
        this._router.navigate(['/login']);
      }


    )

  }

  editarUsuario(){
    this.usuarioModel = this.identidadPerfil;
    this._usuarioService.editarUsuario(this.usuarioModel).subscribe(
    response => {
      console.log(response);
      Swal.fire({
        icon: 'success',
        title: 'Usuario actualizado'

      })
    },
     error =>{
       console.log(<any>error);
     }
    )

  }


  eliminarUsuario(idUsuario){
    this._usuarioService.eliminarUsuario(idUsuario).subscribe(
      response => {
        console.log(<any>response);
        Swal.fire({
        icon: 'success',
        title: 'Usuario eliminado'
        }),
        localStorage.clear();
        this._router.navigate(['/login']);
      }


    )

  }

  obtenerUsuarioId(idUsuario){
    this._usuarioService.obtenerUsuarioId(idUsuario).subscribe(
      response=>{
        this.usuarioModel = response.usuarioEncontrado;
        console.log(response);

      }
    )
  }

  getIdentidad(){
    var identidad2 = JSON.parse(localStorage.getItem('identidad'))
    if(identidad2 != 'undefined'){
      this.identidadPerfil = identidad2;
    }else{
      this.identidadPerfil = null
      this
    }
    return this.identidadPerfil
  }



  // Pendiente modal para editar el perfil del usuario







}
