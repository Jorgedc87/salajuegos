import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { JuegosService } from 'src/app/services/juegos.service';

@Component({
  selector: 'app-listajuegos',
  templateUrl: './listajuegos.component.html',
  styleUrls: ['./listajuegos.component.scss']
})
export class ListajuegosComponent implements OnInit {

  @Output() enviaNuevoJuego: EventEmitter<string> = new EventEmitter()

  constructor(private juegoServices: JuegosService) { }

  ngOnInit(): void {
  }

  cambiaJuego(juego: string): void{
    // this.juegoServices.cambiaJuego(juego)
  }

}
