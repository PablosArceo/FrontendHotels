import { Injectable } from '@angular/core';
import { TipoEvento } from "../modelos/tipoEvento.model";
import { GLOBAL } from "./global.service";
import { Observable } from "rxjs";
import { HttpClient,HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TipoEventoService {

  public url: String;
  public token;
  public headersVariable = new HttpHeaders().set('Content-Type','application/json');

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  obtenerTipoEvento(token): Observable<any>{

    let headersToken = this.headersVariable.set('Authorization',token);

    return this._http.get(this.url+'/obtenerTipoEvento',{headers:headersToken});

  }


  crearTipoEvento(tipoEvento: TipoEvento,token):Observable<any>{

    let headersToken = this.headersVariable.set('Authorization',token);
    let params = JSON.stringify(tipoEvento);

    return this._http.post(this.url+'/registrarTipoEvento',params,{headers: headersToken});

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
