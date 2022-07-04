import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, query, where, getDocs, doc, updateDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import UsuarioI from '../interfaces/usuario';
import { Usuario } from '../models/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  data
  tipoUser = 'Free'
  id: string = 'dsa'
  id2: String = 'asd'
  url = 'https://hostinjor.com/salajuegosapi/v1/usuarios/';

  constructor(
    private firestore: Firestore,
    private http: HttpClient,
    private router: Router
    ) { }

  addUser(usuario: Usuario){
    const userRef = collection(this.firestore, 'users')
    return addDoc(userRef, usuario)
  }

  getUsers(): Observable<Usuario[]>{
    const userRef = collection(this.firestore, 'users')
    return collectionData(userRef, { idField: 'mail'}) as Observable<Usuario[]>
  }

  async updateUser(tipo: string){
    if(JSON.parse(localStorage.getItem('usuario')).suscripcion){
      const userSusc = JSON.parse(localStorage.getItem('usuario')).suscripcion

      if(tipo === userSusc){
        alert('Ya eres ' + tipo)
      }else{
        if(confirm('¿Desea cambiar el plan?')){

          const id = String(localStorage.getItem('id'))
          const userRef = doc(this.firestore, 'users',id)
          await updateDoc(userRef, {
            suscripcion: tipo
          })  
          this.router.navigateByUrl('inicio')
        }
      }
    }else{
      const id = String(localStorage.getItem('id'))
      const userRef = doc(this.firestore, 'users',id)
      await updateDoc(userRef, {
        suscripcion: tipo
      })
      this.router.navigateByUrl('inicio')
    }
    this.guardaUsuario(JSON.parse(localStorage.getItem('usuario')).email)
  }

  async getUserInfo(email: string){
    const userRef = collection(this.firestore, 'users')
    const q = query(userRef, where("email", "==", email))
    
    const querySnapshot = await getDocs(q)
    
    querySnapshot.forEach((doc) =>{
      this.data =  doc.data()
      this.id =  doc.id
    })
  }
  
  async guardaUsuario(mail: string){
    await this.getUserInfo(mail)
    const usuario = JSON.stringify(this.data)
    const id = String(this.id)
    localStorage.setItem('usuario', usuario)
    localStorage.setItem('id', id)
  }
}
