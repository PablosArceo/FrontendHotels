import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelesService } from 'src/app/servicios/hoteles.service';
import { ReservacionService } from 'src/app/servicios/reservacion.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Reservacion } from '../../modelos/reservacion.model';
import Swal from "sweetalert2";


@Component({
  selector: 'app-agregar-reservacion',
  templateUrl: './add-reservacion.component.html',
  styleUrls: ['./add-reservacion.component.scss'],
  providers: [ReservacionService, UsuarioService, HotelesService]
})
export class AddReservacionComponent implements OnInit {

  public reservacionModel: Reservacion;
  public token;
  public identidadR;
  public idHotelRuta;
  public idHabitacionRuta;

  constructor(public _reservacionService: ReservacionService,
    public _router: Router,
    public _usuarioService: UsuarioService,
    public _activatedRoute: ActivatedRoute) {

      this.token = this._usuarioService.getToken();
      this.reservacionModel = new Reservacion("","","","","","",[])

    }

  ngOnInit(): void {

    this._activatedRoute.paramMap.subscribe((dataRuta) => {
      this.idHabitacionRuta = dataRuta.get('idHabitacion');
    })
    console.log(this.idHabitacionRuta)
  }

  reservacion(){
    this._reservacionService.reservacion(this.idHabitacionRuta, this.reservacionModel, this.token).subscribe(
      response =>{

        console.log(response);

        Swal.fire({
          icon: 'success',
          title: 'Reservacion Registrada',
        })

        this._router.navigate[('/hoteles')]

      },
      error  =>{
        Swal.fire({
          icon: 'error',
          title: 'Ha ocurrido un error',
          text: 'Error intenta con otra fecha'
        })
      }
    )
  }

}
