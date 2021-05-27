import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelesService } from 'src/app/servicios/hoteles.service';
import { ServiciosService} from 'src/app/servicios/servicios.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Servicio } from '../../modelos/servicios.model';
import Swal from "sweetalert2";
import { Hotel } from '../../modelos/hotel.model';



@Component({
  selector: 'app-add-servicios',
  templateUrl: './add-servicios.component.html',
  styleUrls: ['./add-servicios.component.scss'],
  providers: [ServiciosService,HotelesService,UsuarioService]
})
export class AddServiciosComponent implements OnInit {

  public servicios

  public hotelModel: Hotel;
  public token;
  public serviciosModel: Servicio;
  public idHotelRuta;
  public identidadH;
  public serviciosModelGet: Servicio;


  constructor(
    public _serviciosService: ServiciosService,
    public _hotelesService: HotelesService,
    public _usuarioService: UsuarioService,
    public _activatedRoute: ActivatedRoute,
    public _router: Router) {

      this.token = this._usuarioService.getToken();
      this.serviciosModel = new Servicio("","",0,"");
      this.hotelModel = new Hotel("","","",0,"")

     }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta)=>{
      this.idHotelRuta = dataRuta.get('idHotel');
  });


  }
  crearServicio(){
    this._serviciosService.crearServicio(this.idHotelRuta,this.serviciosModel,this.token).subscribe(
      response => {
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: 'Servicio Registrado',
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






  obtenerServicios(){
    this._serviciosService.obtenerServicios(this.token).subscribe(
      response => {
        this.servicios = response.serviciosEncontrados
      },
      error =>{
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'El id del hotel es incorrecto, complete todos los datos',
        })
        console.log(<any>error)
      }
    )
  }

  obtenerServiciosID(idServicio){
    this._serviciosService.obtenerServiciosID(this.token, idServicio).subscribe(
      response=>{
        this.serviciosModel = response.servicioEncontrado;
        console.log(response);

      }
    )
  }

  editarServicio(){
    this._serviciosService.editarServicio(this.serviciosModel).subscribe(
      response => {
        console.log(response);
        this.obtenerServicios();

        Swal.fire({
          icon: 'success',
          title: 'Servicios actualizado'

        })
      },
       error =>{
         console.log(<any>error);
       }

    )
  }

  eliminarServicio(idEvento){
    this._serviciosService.eliminarServicio(idEvento).subscribe(
      response => {
        console.log(response);
        this.obtenerServicios();

        Swal.fire({
          icon: 'success',
          title: 'Servicio Eliminado'

        })
      },
       error =>{
         console.log(<any>error);
       }

    )
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




}
