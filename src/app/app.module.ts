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
import { EventosComponent } from './componentes/eventos/eventos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { AddServiciosComponent } from './componentes/add-servicios/add-servicios.component';
import { ServiciosAllComponent } from './componentes/servicios-all/servicios-all.component';
import { HabitacionesComponent } from './componentes/habitaciones/habitaciones.component';
import { AddHabitacionComponent } from './componentes/add-habitacion/add-habitacion.component';
import { AddReservacionComponent } from './componentes/add-reservacion/add-reservacion.component';
import { ReservacionClienteComponent } from './componentes/reservacion-cliente/reservacion-cliente.component';
import { ReservacionesComponent } from './componentes/reservaciones/reservaciones.component';
import { FacturasComponent } from './componentes/facturas/facturas.component';

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
    EventosComponent,
    AddServiciosComponent,
    ServiciosAllComponent,
    HabitacionesComponent,
    AddHabitacionComponent,
    AddReservacionComponent,
    ReservacionClienteComponent,
    ReservacionesComponent,
    FacturasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatMomentDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
