import { Injectable } from '@angular/core';
import { Reservacion } from '../modelos/reservacion.model';
import {GLOBAL} from './global.service'
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReservacionService {

  public url: String;
  public identidadR;
  public token;
  public headersVariable = new HttpHeaders().set('Content-Type','application/json')

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  reservacion(idHabitacion: String, reservacion: Reservacion, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization',token);
    let params = JSON.stringify(reservacion);


    return this._http.post(this.url+'/reservacion/'+idHabitacion,params,{headers: headersToken});
  }



  obtenerReservacionesPorCliente(token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization',token)


    return this._http.get(this.url+'/obtenerReservacionesPorCliente',{headers: headersToken})
  }



  obtenerReservacionesGerente(id:String, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization',token)

    return this._http.get(this.url+'/obtenerReservacionesGerente/'+id,{headers: headersToken});
  }

  eliminarReservacion(id:String, token):  Observable<any> {

    let headersToken = this.headersVariable.set('Authorization',token)

    return this._http.delete(this.url+'/eliminarReservacion/'+id,{headers:headersToken});

  }



  obtenerServiciosPorHotel(id: String, token): Observable<any>{

    let headersToken = this.headersVariable.set('Authorization',token)

    return this._http.get(this.url+'/obtenerServiciosPorHotel/'+id,{headers: headersToken})
  }



  hotelServicios(idHabitacion): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization',this.getToken())
    return this._http.get(this.url+'/hotelServicios/'+idHabitacion,{headers: headersToken})
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
