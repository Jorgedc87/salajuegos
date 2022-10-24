import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import ChatI from '../interfaces/chat';
import { Chat } from '../models/chat';

@Directive({
  selector: '[appUsers]'
})
export class UsersDirective {

  @Input() appUsers: ChatI;

  @HostListener('window:load') load(){
    // console.log('holis')
    // setTimeout(()=>)
    this.el.nativeElement.innerHTML = this.appUsers.texto
  };

  constructor(private el: ElementRef) {

    // this.el.nativeElement.innerHTML =
    // `
    // <div class="d-flex flex-row p-1 text-propio" *ngIf="appUsers.usuario == usuario.nombre">
    //   <div class="chat ml-2 p-2 float ">{{appUsers.texto}}</div>
    // </div>
    // <div class="d-flex flex-row p-2" *ngIf="appUsers.usuario != appUsers.nombre">
    //   <div class="user ml-2 p-2">
    //     {{appUsers.usuario}} :
    //   </div>
    //   <div class="chat ml-2 p-2">{{texto}}</div>
    // </div>
    // `
  }


}
