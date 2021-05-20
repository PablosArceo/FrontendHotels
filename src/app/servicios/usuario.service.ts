import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/usuario.model';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { GLOBAL } from "./global.service";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public url: String;
  public identidad;
  public token;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  registro(usuario): Observable<any>{
    let params = JSON.stringify(usuario);

    return this._http.post(this.url + '/registrarUsuario', params, { headers: this.headersVariable })
    // `${this.url}/registrarUsuario`
  }

  public registrarGerente(usuario: Usuario){

    let params = JSON.stringify(usuario);
    let headersToken = this.headersVariable.set('Authorization',this.getToken())

    return this._http.post(this.url+'/registrarGerente',params,{headers: headersToken});

  }

  obtenerUsuarios(): Observable<any>{
    return this._http.get(this.url + '/obtenerUsuarios', {headers: this.headersVariable});
  }

  obtenerUsuarioId(id:String): Observable<any>{
    return this._http.get(this.url + '/obtenerUsuarioId/'+ id, {headers: this.headersVariable})
  }

  obtenerGerentes(): Observable<any>{
    let headerToken = this.headersVariable.set('Authorization', this.getToken());
    return this._http.get(this.url + '/obtenerGerentes', {headers: headerToken})
    }

    // ADMIN
  editarUsuarioAdmin(usuario: Usuario):Observable<any>{
    let params = JSON.stringify(usuario);
    let headersToken = this.headersVariable.set('Authorization', this.getToken())


    return this._http.put(this.url + '/editarUsuarioAdmin/' + usuario._id, params, {headers: headersToken})
  }

  eliminarUsuarioAdmin(id:String): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', this.getToken());

    return this._http.delete(this.url + '/eliminarUsuarioAdmin/' + id, {headers: headersToken})
  }

  // CLIENTE
  editarUsuario(usuario: Usuario):Observable<any>{
    let params = JSON.stringify(usuario);
    let headersToken = this.headersVariable.set('Authorization', this.getToken())


    return this._http.put(this.url + '/editarUsuario/' + usuario._id, params, {headers: headersToken})
  }

  eliminarUsuario(id:String): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', this.getToken());

    return this._http.delete(this.url + '/eliminarUsuario/' + id, {headers: headersToken})
  }




  login(usuario, obtenerToken = null): Observable<any>{
    if(obtenerToken != null){
      usuario.obtenerToken = obtenerToken;
     }

    let params = JSON.stringify(usuario);

    return this._http.post(this.url + '/login', params, {headers: this.headersVariable});
  }

  getIdentidad(){
    var identidad2 = JSON.parse(localStorage.getItem('identidad'));
    if(identidad2 != 'undefined'){
      this.identidad = identidad2
    }else{
      this.identidad = null;
    }

    return this.identidad;
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
