import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, query, where, getDocs, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Pregunta } from '../models/pregunta.model';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class SuscripcionService {
  listaPro: string[] = []
  listaPremium: string[] = []
  data
  tipoUser = this.userService.tipoUser
  juegosFree = ['tateti']
  juegosPro = ['tateti','ppt','ahorcado']
  juegosPremium = ['tateti','ppt','ahorcado','trivia']

  paquete: string = 'Ninguno'

  constructor(
    private firestore: Firestore,
    public userService: UsersService
  ) { }

  cargaPaquetes(){
    if(localStorage.getItem('pro')){
      this.listaPro = JSON.parse(localStorage.getItem('pro'))
    }

    if(localStorage.getItem('premium')){
      this.listaPremium = JSON.parse(localStorage.getItem('premium'))
    }

    localStorage.setItem('juegosFree', JSON.stringify(this.juegosFree))
    localStorage.setItem('juegosPro', JSON.stringify(this.juegosPro))
    localStorage.setItem('juegosPremium', JSON.stringify(this.juegosPremium))

  }

  adhiereMiembro(tipo: string){
    const usuario = JSON.parse(localStorage.getItem('usuario'))
    const mail = usuario.mail
    if(confirm('Está a punto de convertirse en miembro '+ tipo + ' ¿Desea seguir adelante?'))
    switch(tipo)
    {
      case 'Pro':
        

        break

      case 'Premium':

 
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

  chequeaUsuario(){
    if(JSON.parse(localStorage.getItem('usuario')).mail == ''){

    }
  }
}
