import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Pregunta } from '../models/pregunta.model';

@Injectable({
  providedIn: 'root'
})
export class SuscripcionService {
  listaPro: string[] = []
  listaPremium: string[] = []

  paquete: string = 'Ninguno'

  constructor(
    private firestore: Firestore
  ) { }

  // compruebaPaquete(){
  //   const paquetesRef = collection(this.firestore, 'paquetes')
  //   return collectionData(paquetesRef, { idField: 'id'}) as Observable<any[]>
  // }

  adhiereMiembro(tipo: string){
    if(confirm('Está a punto de convertirse en miembro '+ tipo + ' ¿Desea seguir adelante?'))
    switch(tipo)
    {
      case 'Pro':
        if(localStorage.getItem('pro')){
          this.listaPro = JSON.parse(localStorage.getItem('pro'))
        }
        this.listaPro.push(localStorage.getItem('usuario'))
        localStorage.setItem('pro',JSON.stringify(this.listaPro))
        break

      case 'Premium':
        if(localStorage.getItem('pro')){
          this.listaPremium = JSON.parse(localStorage.getItem('premium'))
        }
        this.listaPremium.push(localStorage.getItem('usuario'))
        localStorage.setItem('premium',JSON.stringify(this.listaPremium))
        break
    }
  }

  autorizaMiembro(tipo){
    switch(tipo)
    {
      case 'pro':
        if(localStorage.getItem('pro')){
          this.listaPro = JSON.parse(localStorage.getItem('pro'))

          if(this.listaPro.includes(localStorage.getItem('usuario'))){
            return true
          }else{
            return false
          }
        }
        break

      case 'premium':
        if(localStorage.getItem('premium')){
          this.listaPremium = JSON.parse(localStorage.getItem('premium'))

          if(this.listaPremium.includes(localStorage.getItem('usuario'))){
            return true
          }else{
            return false
          }
        }
        break

      default:
        return false
        break
    }
    return false
  }
}
