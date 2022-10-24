import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection, doc, Firestore, getDoc, getDocs } from '@angular/fire/firestore';
import { initializeApp } from 'firebase/app'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import ChatI from '../interfaces/chat';
import { Chat } from '../models/chat';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  setItem(chat: any) {
    const juegos = this.firestore.collection('chat')
    juegos.add(chat)
  }

  constructor(public firestore: AngularFirestore) {
  }

  traerColeccion(): Observable<any>{
    const juegos = this.firestore.collection('chat')
    return juegos.valueChanges();
   }

}
