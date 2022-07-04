import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JuegosService } from 'src/app/services/juegos.service';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.scss']
})
export class JuegosComponent implements OnInit {

  juegoActivo: string

  constructor(public juegosService: JuegosService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.route.snapshot.params['id']){
      this.juegoActivo = this.route.snapshot.params['id']
      this.juegosService.cambiaJuego(this.juegoActivo)
    }else{
      this.juegosService.juegoActivo = 'Ninguno'
    }
  }

  cambiaJuego(juego: string){
    this.juegoActivo = juego
    this.juegosService.cambiaJuego(juego)
    
        if(juego == 'Ninguno'){
          this.router.navigateByUrl('juegos')
          this.juegosService.juegoActivo = 'Ninguno'
        }else{
          this.router.navigateByUrl('juegos/' + juego)
        }
  }

}
