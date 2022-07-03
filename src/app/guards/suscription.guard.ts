import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SuscripcionService } from '../services/suscripcion.service';

@Injectable({
  providedIn: 'root'
})
export class SuscriptionGuard implements CanActivate {

  constructor(
    private route: Router,
    private suscripctionService: SuscripcionService
    ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(localStorage.getItem['usuario']){
      if(this.suscripctionService.autorizaMiembro('pro')){
        return true
      }else{
        return false
      }
    }else{
      this.route.navigate(['noauth'])
      return false
    }
  }

}
