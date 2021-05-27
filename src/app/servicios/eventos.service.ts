import { Injectable } from '@angular/core';
import {Evento} from '../modelos/eventos.model';

import {GLOBAL} from './global.service'
import { Observable } from "rxjs";
import { HttpClient,HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  public url: String;
  public token;
  public headersVariable = new HttpHeaders().set('Content-Type','application/json');


  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url
  }


  obtenerEventosPorHotel(id: String,token): Observable<any>{

    let headersToken = this.headersVariable.set('Authorization',token)

    return this._http.get(this.url+'/obtenerEventosPorHotel/'+id,{headers: headersToken});

  }



  obtenerEventos(token): Observable<any>{

    let headersToken = this.headersVariable.set('Authorization',token);

    return this._http.get(this.url+'/obtenerEventos',{headers:headersToken});

  }

  obtenerEventosID(token,id:String): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization',token)

    return this._http.get(this.url + '/obtenerEventosID/'+ id, {headers: headersToken})
  }





  editarEvento(evento: Evento):Observable<any>{
    let params = JSON.stringify(evento);
    let headersToken = this.headersVariable.set('Authorization', this.getToken())

    return this._http.put(this.url + '/editarEvento/' + evento._id, params, {headers: headersToken})
  }



  eliminarEvento(id:String): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', this.getToken());

    return this._http.delete(this.url + '/eliminarEvento/' + id, {headers: headersToken})
  }

  obtenerHotelID(token,id:String): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization',token)

    return this._http.get(this.url + '/obtenerHotelID/'+ id, {headers: headersToken})
  }



  registrarEvento(id: String, evento: Evento, token):Observable<any>{

    let headersToken = this.headersVariable.set('Authorization',token);
    let params = JSON.stringify(evento);

    return this._http.post(this.url+'/registrarEvento/'+id,params,{headers: headersToken});

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

