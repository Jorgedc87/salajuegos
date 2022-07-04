import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-listausuarios',
  templateUrl: './listausuarios.component.html',
  styleUrls: ['./listausuarios.component.scss']
})
export class ListausuariosComponent implements OnInit {

  usuarios
  free = []
  pro = []
  premium = []

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.cargaUsuarios()
  }

  async cargaUsuarios(){
    await this.userService.getUsersInfo().then(res => {
      this.usuarios = res
    })
    for(let usuario of this.usuarios){
      switch(usuario.suscripcion){
        case null:
        case 'Free':
          this.free.push(usuario)
          break
        case 'Pro':
          this.pro.push(usuario)
          break
        case 'Premium':
          this.premium.push(usuario)
          break
      }
    }
    console.info(this.free)
    console.info(this.pro)
    console.info(this.premium)
    console.info(this.usuarios)
  }

}
