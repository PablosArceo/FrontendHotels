import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HotelesComponent } from './componentes/hoteles/hoteles.component';
import { AgregarHotelComponent } from './componentes/agregar-hotel/agregar-hotel.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { AddTipoEventoComponent } from './componentes/add-tipo-evento/add-tipo-evento.component';
import { TipoEventosComponent } from './componentes/tipo-eventos/tipo-eventos.component';
import { RegistroGerenteComponent } from './componentes/registro-gerente/registro-gerente.component';
import { AddEventosComponent } from './componentes/add-eventos/add-eventos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    NavbarComponent,
    UsuariosComponent,
    HotelesComponent,
    AgregarHotelComponent,
    PerfilComponent,
    AddTipoEventoComponent,
    TipoEventosComponent,
    RegistroGerenteComponent,
    AddEventosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
