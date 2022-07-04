import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  juegoActivo = 'Ninguno'

  constructor(private route: ActivatedRoute) {

    }

  cambiaJuego(juego: string){
    this.juegoActivo = juego
  }

  cargaJuegosPack(suscripcion: string){
    let juegos
    switch(suscripcion){
      case 'Free': 
        juegos = JSON.parse(localStorage.getItem('juegosFree'))
        break
      case 'Pro': 
        juegos = JSON.parse(localStorage.getItem('juegosPro'))
        break
      case 'Premium': 
        juegos = JSON.parse(localStorage.getItem('juegosPremium'))
        break
    }

    return juegos
  }
  
}
