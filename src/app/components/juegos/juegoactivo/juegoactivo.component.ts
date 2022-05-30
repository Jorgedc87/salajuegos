import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-juegoactivo',
  templateUrl: './juegoactivo.component.html',
  styleUrls: ['./juegoactivo.component.scss']
})
export class JuegoactivoComponent implements OnInit {

  @Output() enviaNuevoJuego: EventEmitter<string> = new EventEmitter()
  @Input() juegoActivo: string = ''

  tipoPantalla: string = 'Juego'

  constructor() { }

  ngOnInit(): void {
  }

  cambiaJuego(juego: string): void{
    this.enviaNuevoJuego.emit(juego);
  }

  cambiaPantalla(juego: string): void{
    this.tipoPantalla = juego
  }

}
