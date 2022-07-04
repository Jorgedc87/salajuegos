import { Component, OnInit } from '@angular/core';
import UsuarioI from 'src/app/interfaces/usuario';
import { JuegosService } from 'src/app/services/juegos.service';

@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.component.html',
  styleUrls: ['./miperfil.component.scss']
})
export class MiperfilComponent implements OnInit {

  usuario: UsuarioI
  juegos

  constructor(private juegosService: JuegosService) { }

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('usuario'))
    if(!this.usuario.suscripcion){
      this.usuario.suscripcion= 'Free'
    }
    this.cargaJuegosPack()
    
  }

  cargaJuegosPack(){
   this.juegos = this.juegosService.cargaJuegosPack(this.usuario.suscripcion)
  }

}
