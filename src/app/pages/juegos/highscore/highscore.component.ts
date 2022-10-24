import { Component, OnInit } from '@angular/core';
import ChatI from 'src/app/interfaces/chat';
import UsuarioI from 'src/app/interfaces/usuario';
import { Chat } from 'src/app/models/chat';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-highscore',
  templateUrl: './highscore.component.html',
  styleUrls: ['./highscore.component.scss']
})
export class HighscoreComponent implements OnInit {
  textoEnvia = ""
  usuario: UsuarioI;
  mensajes = this.firestoreApp.traerColeccion();
  // public colleccion: Array<ChatI>= new Array<ChatI>();

  constructor(public firestoreApp: StorageService) {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
  }

  ngOnInit(): void {
  }

  enviaChat(){

    let nuevomensaje = new Chat;
    nuevomensaje.texto = this.textoEnvia;
    nuevomensaje.usuario = this.usuario.nombre
    nuevomensaje.fecha = new Date;
    this.firestoreApp.setItem(JSON.parse(JSON.stringify(nuevomensaje)))
    this.textoEnvia = ""
  }
}
