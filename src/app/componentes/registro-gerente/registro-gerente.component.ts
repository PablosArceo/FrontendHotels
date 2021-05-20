import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario.model';
import { UsuarioService } from "../../servicios/usuario.service";
import Swal from "sweetalert2";


@Component({
  selector: 'app-registro-gerente',
  templateUrl: './registro-gerente.component.html',
  styleUrls: ['./registro-gerente.component.scss'],
  providers: [UsuarioService]
})
export class RegistroGerenteComponent implements OnInit {
  public usuarioHotel: Usuario
  public token;
  public identidad;


  constructor(private _usuarioService: UsuarioService,private _router: Router) {
    this.usuarioHotel = new Usuario("","","","","","","","")

   }

  ngOnInit(): void {
  }

  registrarGerente(){
    this._usuarioService.registrarGerente(this.usuarioHotel).subscribe(
      response =>{
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: 'Gerente registrado!',
        })
        this._router.navigate(['/usuarios']);
      },
      error =>{
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'El gerente ya existe',
        })
        console.log(<any>error)
      }
    )
  }

  getToken() {
    this._usuarioService.login(this.usuarioHotel, 'true').subscribe(
      (response) => {
        this.token = response.token;
        localStorage.setItem('token', this.token);
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }

}




