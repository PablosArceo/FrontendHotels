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
  { path: '**', component: LoginComponent }

  // { path: '**', redictTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
