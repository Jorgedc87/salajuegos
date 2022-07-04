import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SuscripcionService } from '../services/suscripcion.service';
import { JuegosService } from '../services/juegos.service';

@Injectable({
  providedIn: 'root'
})
export class SuscriptionGuard implements CanActivate {

  juegosFree = JSON.parse(localStorage.getItem('juegosFree'))
  juegosPro = JSON.parse(localStorage.getItem('juegosPro'))
  juegosPremium = JSON.parse(localStorage.getItem('juegosPremium'))
  suscTipo = ''

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private suscripctionService: SuscripcionService,
    private juegosService: JuegosService
  )
  {
    const id: string = route.snapshot.params.id;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      
      
      
    if(JSON.parse(localStorage.getItem('usuario')).suscripcion){
      this.suscTipo = JSON.parse(localStorage.getItem('usuario')).suscripcion
    }else{
      this.suscTipo = 'Free'
    }


    switch(this.suscTipo){
      case 'Free':
        for(let juego of this.juegosFree){
          if(juego == route.params['id']){
            return true
          }
        }
        break
      case 'Pro':
        for(let juego of this.juegosPro){
          if(juego == route.params['id']){
            return true
          }
        }
        break
      case 'Premium':

        for(let juego of this.juegosPremium){
          if(juego == route.params['id']){
            return true
          }
        }
        break
        
      }
      
      this.router.navigateByUrl('noauth')
      return false
  }
}
