import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PiedraPapelTijeraComponent } from './components/juegos/piedra-papel-tijera/piedra-papel-tijera.component';
import { TatetiComponent } from './components/juegos/tateti/tateti.component';
import { TriviaComponent } from './components/juegos/trivia/trivia.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'inicio'},
  {path: 'inicio', component: HomeComponent},
  {path: 'quien-soy', component: AboutUsComponent},
  {path: 'juegos', component: JuegosComponent, 
    children: [
      {path: 'trivia', component: TriviaComponent},
      {path: 'tateti', component: TatetiComponent},
      {path: 'piedrapapeltijeras', component: PiedraPapelTijeraComponent},
    ]},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegisterComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
