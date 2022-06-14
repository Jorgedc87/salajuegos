import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Usuario } from '../models/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private firestore: Firestore) { }

  addUser(usuario: Usuario){
    const userRef = collection(this.firestore, 'users')
    return addDoc(userRef, usuario)
  }

  getUsers(){

  }
}
