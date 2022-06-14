import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
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

  getUsers(): Observable<Usuario[]>{
    const userRef = collection(this.firestore, 'users')
    return collectionData(userRef, { idField: 'mail'}) as Observable<Usuario[]>
  }
  getUserInfo(email: string){
    const userRef = collection(this.firestore, 'users')
    // return collectionData(userRef, { idField: 'mail'}) as Observable<any>
    return query(userRef, where("email", "==", email))
    // return q
  }
}
