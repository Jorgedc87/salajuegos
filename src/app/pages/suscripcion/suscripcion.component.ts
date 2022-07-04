import { Component, OnInit } from '@angular/core';
import { JuegosService } from 'src/app/services/juegos.service';
import { SuscripcionService } from 'src/app/services/suscripcion.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripcion.component.html',
  styleUrls: ['./suscripcion.component.scss']
})
export class SuscripcionComponent implements OnInit {

  listaPro: string[] = []
  listaPremium: string[] = []
  pro
  premium
  free
  tipoUsuario = this.userService.tipoUser


  constructor(private paqueteService: SuscripcionService, public userService: UsersService, private juegosService: JuegosService) { }

  ngOnInit(): void {
    this.chequeaSuscripcion()
    this.chequeo()
    this.cargaPacks()
  }

  serMiembro(tipo: string){
    this.userService.updateUser(tipo)
  }

  chequeo(){
    if(JSON.parse(localStorage.getItem('usuario')).suscripcion){
      this.tipoUsuario = JSON.parse(localStorage.getItem('usuario')).suscripcion
    }
  }

  chequeaSuscripcion(){

    if(localStorage.getItem('pro')){
      this.listaPro = JSON.parse(localStorage.getItem('pro'))
      console.log(this.listaPro)
    }
  }

  cargaPacks(){
    this.free = this.juegosService.cargaJuegosPack('Free')
    this.pro = this.juegosService.cargaJuegosPack('Pro')
    this.premium = this.juegosService.cargaJuegosPack('Premium')
  }

}
