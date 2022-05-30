import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-listajuegos',
  templateUrl: './listajuegos.component.html',
  styleUrls: ['./listajuegos.component.scss']
})
export class ListajuegosComponent implements OnInit {

  @Output() enviaNuevoJuego: EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  cambiaJuego(juego: string): void{
    this.enviaNuevoJuego.emit(juego);
  }

}
