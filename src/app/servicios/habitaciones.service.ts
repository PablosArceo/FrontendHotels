import { Injectable } from '@angular/core';
import {Habitacion} from '../modelos/habitacion.model';

import {GLOBAL} from './global.service'
import { Observable } from "rxjs";
import { HttpClient,HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HabitacionesService {

  public url: String;
  public token;
  public headersVariable = new HttpHeaders().set('Content-Type','application/json');


  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url
  }

  obtenerHabitacionID(token,id:String): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization',token)

    return this._http.get(this.url + '/obtenerHabitacionID/'+ id, {headers: headersToken})
  }



  obtenerHabitacionHotel(id: String,token): Observable<any>{

    let headersToken = this.headersVariable.set('Authorization',token)

    return this._http.get(this.url+'/obtenerHabitacionHotel/'+ id,{headers: headersToken});

  }


  registrarHabitacion(id: String, habitacion: Habitacion, token):Observable<any>{

    let headersToken = this.headersVariable.set('Authorization',token);
    let params = JSON.stringify(habitacion);

    return this._http.post(this.url+'/registrarHabitacion/'+id,params,{headers: headersToken});

  }


  obtenerHotelID(token,id:String): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization',token)

    return this._http.get(this.url + '/obtenerHotelID/'+ id, {headers: headersToken})
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

