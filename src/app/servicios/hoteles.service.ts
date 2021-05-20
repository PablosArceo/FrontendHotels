import { Injectable } from '@angular/core';
import { Hotel } from '../modelos/hotel.model';

import {GLOBAL} from './global.service'
import { Observable } from "rxjs";
import { HttpClient,HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HotelesService {

  public url: String;
  public identidad;
  public token;
  public headersVariable = new HttpHeaders().set('Content-Type','application/json');


  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url
  }

    obtenerHoteles(token): Observable<any>{

    let headersToken = this.headersVariable.set('Authorization',token);

    return this._http.get(this.url+'/obtenerHoteles',{headers: headersToken});
  }





  /* obtenerHotelID(token,id:String): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization',token);

    return this._http.get(this.url + '/obtenerHotelID/'+ id, {headers:headersToken})
  }
 */

  obtenerHotelID(token,id:String): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization',token)

    return this._http.get(this.url + '/obtenerHotelID/'+ id, {headers: headersToken})
  }


 /*  editarHotel(token, id:String): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token)


    return this._http.put(this.url + '/editarHotel/' + id, {headers: headersToken})
  } */

  editarHotel(hotel: Hotel):Observable<any>{
    let params = JSON.stringify(hotel);
    let headersToken = this.headersVariable.set('Authorization', this.getToken())

    return this._http.put(this.url + '/editarHotel/' + hotel._id, params, {headers: headersToken})
  }


  eliminarHotel(id:String): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', this.getToken());

    return this._http.delete(this.url + '/eliminarHotel/' + id, {headers: headersToken})
  }


    public nuevoHotel(hotel: Hotel){

    let params = JSON.stringify(hotel);
    let headersToken = this.headersVariable.set('Authorization',this.getToken())

    return this._http.post(this.url+'/nuevoHotel',params,{headers: headersToken});

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
