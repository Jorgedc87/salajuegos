import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopmenuComponent } from './components/topmenu/topmenu.component';
import { FooterComponent } from './components/footer/footer.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { ErrorComponent } from './pages/error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { PiedraPapelTijeraComponent } from './components/juegos/piedra-papel-tijera/piedra-papel-tijera.component';
import { TatetiComponent } from './components/juegos/tateti/tateti.component';
import { ListajuegosComponent } from './components/juegos/listajuegos/listajuegos.component';
import { JuegoactivoComponent } from './components/juegos/juegoactivo/juegoactivo.component';
import { firebase } from 'src/environments/firebase';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { TableroComponent } from './components/juegos/tateti/tablero/tablero.component';
import { SquareComponent } from './components/juegos/tateti/square/square.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AboutUsComponent,
    TopmenuComponent,
    FooterComponent,
    JuegosComponent,
    ErrorComponent,
    PiedraPapelTijeraComponent,
    TatetiComponent,
    ListajuegosComponent,
    JuegoactivoComponent,
    TableroComponent,
    SquareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
