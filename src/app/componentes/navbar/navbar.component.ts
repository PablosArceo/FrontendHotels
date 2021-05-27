import { Component, OnInit } from '@angular/core';
import { HotelesService } from 'src/app/servicios/hoteles.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Hotel } from '../../modelos/hotel.model';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [UsuarioService]
})
export class NavbarComponent implements OnInit {

  search;
  public hotelModel: Hotel;


  public identidadVariable;

  constructor(public _usuarioService: UsuarioService, public _hotelesService: HotelesService) {  // Publico o Privada, Consultar.
    this.hotelModel = new Hotel("","","",0,"")

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
