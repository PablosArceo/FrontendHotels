import {Injectable} from '@angular/core';
import {GLOBAL} from './global.service';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Servicio } from '../modelos/servicios.model';



@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  public url: String;
  public headersVariable = new HttpHeaders().set('Content-Type','application/json')
  public token;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url
  }

  obtenerServiciosPorHotel(id: String, token): Observable<any>{

    let headersToken = this.headersVariable.set('Authorization',token)

    return this._http.get(this.url+'/obtenerServiciosPorHotel/'+id,{headers: headersToken})
  }




  crearServicio(id: String, servicio: Servicio, token):Observable<any>{

    let headersToken = this.headersVariable.set('Authorization',token);
    let params = JSON.stringify(servicio);

    return this._http.post(this.url+'/crearServicio/'+id,params,{headers: headersToken});

  }


  obtenerServicios(token): Observable<any>{

    let headersToken = this.headersVariable.set('Authorization',token);

    return this._http.get(this.url+'/obtenerServicios',{headers: headersToken});
  }



  obtenerServiciosID(token,id:String): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization',token)

    return this._http.get(this.url + '/obtenerServiciosID/'+ id, {headers: headersToken})
  }


  editarServicio(servicio: Servicio):Observable<any>{
    let params = JSON.stringify(servicio);
    let headersToken = this.headersVariable.set('Authorization', this.getToken())

    return this._http.put(this.url + '/editarServicio/' + servicio._id, params, {headers: headersToken})
  }

  servicioPorReservacion(idReservacion, idServicio):  Observable<any> {

    let headersToken = this.headersVariable.set('Authorization',this.getToken())

    return this._http.put(this.url+'/servicioPorReservacion/'+idReservacion + "/" + idServicio,{headers:headersToken});

  }





  eliminarServicio(id:String): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', this.getToken());

    return this._http.delete(this.url + '/eliminarServicio/' + id, {headers: headersToken})
  }

  serviciosHotel(idHotel):Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', this.getToken());
    return this._http.get(this.url +'/serviciosHotel'+ idHotel, {headers: headersToken})
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
