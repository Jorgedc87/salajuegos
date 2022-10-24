import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from './components/juegos/ahorcado/ahorcado.component';
import { PiedraPapelTijeraComponent } from './components/juegos/piedra-papel-tijera/piedra-papel-tijera.component';
import { TatetiComponent } from './components/juegos/tateti/tateti.component';
import { TriviaComponent } from './components/juegos/trivia/trivia.component';
import { AuthGuard } from './guards/auth.guard';
import { SuscriptionGuard } from './guards/suscription.guard';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/juegos/home/home.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { ListausuariosComponent } from './pages/listausuarios/listausuarios.component';
import { LoginComponent } from './pages/login/login.component';
import { MiperfilComponent } from './pages/miperfil/miperfil.component';
import { NoauthComponent } from './pages/noauth/noauth.component';
import { PruebaapiComponent } from './pages/pruebaapi/pruebaapi.component';
import { RegisterComponent } from './pages/register/register.component';
import { SuscripcionComponent } from './pages/suscripcion/suscripcion.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'inicio'},
  {path: 'inicio', component: HomeComponent},
  {path: 'quien-soy', component: AboutUsComponent},
  {path: 'perfil', component: MiperfilComponent, canActivate: [AuthGuard]},
  {path: 'paquetes', component: SuscripcionComponent, canActivate: [AuthGuard]},
  {path: 'lista-usuarios', component: ListausuariosComponent},
  {path: 'rest', component: PruebaapiComponent},
  {path: 'juegos', component: JuegosComponent, canActivate: [AuthGuard]},
  {path: 'juegos/:id', component: JuegosComponent, canActivate: [SuscriptionGuard]},
  // {path: 'juegos', component: JuegosComponent,
  // canActivate: [AuthGuard],
  //   children: [
  //     {path: 'trivia', component: TriviaComponent, canActivate: [SuscriptionGuard]},
  //     {path: 'tateti', component: TatetiComponent, canActivate: [SuscriptionGuard]},
  //     {path: 'ppt', component: PiedraPapelTijeraComponent, canActivate: [SuscriptionGuard]},
  //     {path: 'ahorcado', component: AhorcadoComponent, canActivate: [SuscriptionGuard]},
  //   ]},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegisterComponent},
  {path: 'noauth', component: NoauthComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
