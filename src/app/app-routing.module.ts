import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import {HotelesComponent } from './componentes/hoteles/hoteles.component';
import {AgregarHotelComponent} from './componentes/agregar-hotel/agregar-hotel.component';
import {PerfilComponent} from './componentes/perfil/perfil.component';
import {AddTipoEventoComponent } from './componentes/add-tipo-evento/add-tipo-evento.component';
import { TipoEventosComponent } from './componentes/tipo-eventos/tipo-eventos.component';
import { RegistroGerenteComponent } from './componentes/registro-gerente/registro-gerente.component';
import { AddEventosComponent } from './componentes/add-eventos/add-eventos.component';
import { EventosComponent } from './componentes/eventos/eventos.component';
import {AddServiciosComponent} from './componentes/add-servicios/add-servicios.component';
import {ServiciosAllComponent} from './componentes/servicios-all/servicios-all.component';
import {HabitacionesComponent} from './componentes/habitaciones/habitaciones.component';
import {AddHabitacionComponent} from './componentes//add-habitacion/add-habitacion.component';
import { AddReservacionComponent } from './componentes/add-reservacion/add-reservacion.component';
import {ReservacionClienteComponent} from './componentes/reservacion-cliente/reservacion-cliente.component';
import { ReservacionesComponent } from './componentes/reservaciones/reservaciones.component';
import {FacturasComponent} from './componentes/facturas/facturas.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'hoteles', component: HotelesComponent},
  { path: 'nuevoHotel', component: AgregarHotelComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: 'addTipoEventos', component: AddTipoEventoComponent},
  { path: 'tipoEventos', component: TipoEventosComponent},
  { path: 'registroGerente', component: RegistroGerenteComponent},
  { path: 'addEventos/:idHotel', component: AddEventosComponent},
  { path: 'eventos/:idHotel', component: EventosComponent},
  { path: 'Addservicios/:idHotel', component: AddServiciosComponent},
  { path: 'servicios/:idHotel', component: ServiciosAllComponent},
  { path: 'habitaciones/:idHotel', component:HabitacionesComponent},
  { path: 'addHabitacion/:idHotel', component:AddHabitacionComponent},
  { path: 'addReservacion/:idHabitacion', component:AddReservacionComponent},
  { path: 'reservaciones-cliente',component:ReservacionClienteComponent},
  { path: 'reservaciones/:idHabitacion', component:ReservacionesComponent},
  { path: 'facturasCliente', component:FacturasComponent},
  { path: '**', component: LoginComponent }

  // { path: '**', redictTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
