import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.scss']
})
export class JuegosComponent implements OnInit {

  juegoActivo: string = 'Ahorcado'

  constructor() { }

  ngOnInit(): void {
  }

  cambiaJuego(juego: string){
    this.juegoActivo = juego
  }

}
