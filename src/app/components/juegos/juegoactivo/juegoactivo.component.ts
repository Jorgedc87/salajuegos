import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JuegosService } from 'src/app/services/juegos.service';

@Component({
  selector: 'app-juegoactivo',
  templateUrl: './juegoactivo.component.html',
  styleUrls: ['./juegoactivo.component.scss']
})
export class JuegoactivoComponent implements OnInit {

  @Output() enviaNuevoJuego: EventEmitter<string> = new EventEmitter()

  tipoPantalla: string = 'Juego'

  constructor(private route: ActivatedRoute,
    private router: Router,
    public juegoServ: JuegosService) { }

  ngOnInit(): void {
  }

  volverMenu(): void{
    this.juegoServ.juegoActivo = 'Ninguno'
    this.router.navigateByUrl('juegos')
  }

  cambiaPantalla(juego: string): void{
    this.tipoPantalla = juego
  }

}
