import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [UsuarioService]
})
export class NavbarComponent implements OnInit {

  public identidadVariable;

  constructor(public _usuarioService: UsuarioService) {  // Publico o Privada, Consultar.
  }

  ngOnInit(): void {
    this.getIdentidad()
  }

  getIdentidad(){
    var identidad2 = JSON.parse(localStorage.getItem('identidad'))
    if(identidad2 != 'undefined'){
      this.identidadVariable = identidad2;
    }else{
      this.identidadVariable = null
    }
    return this.identidadVariable
  }

  cerrarSesion(){
    localStorage.clear();
  }

}
