import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Usuario } from '../models/usuario.model';
import firebase from 'firebase/compat/app'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private authF: AngularFireAuth
  ) { }

  async register(usuario: Usuario){
    try{
      return await this.authF.createUserWithEmailAndPassword(usuario.mail, usuario.contrasena)
    }
    catch (err){
      console.log('Error en login: ', err)
      return null
    }
  }

  async login(usuario: Usuario){
    try{
      return await this.authF.signInWithEmailAndPassword(usuario.mail, usuario.contrasena)
    }
    catch (err){
      console.log('Error en login: ', err)
      return null
    }
  }

  async loginWithGoogle(usuario: Usuario){
    try{
      return await this.authF.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    }
    catch (err){
      console.log('Error en login con google: ', err)
      return null
    }
  }

  getUserLogged(){
    return this.authF.authState
  }

  logout(){
    this.authF.signOut()
  }
}
