import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.scss']
})
export class TopmenuComponent implements OnInit {

  userLogged = this.authService.getUserLogged()

  constructor(
    private authService: AuthService,
    private userService: UsersService,
  ) { }

  ngOnInit(): void {
  }

  desloguea(){
    this.authService.logout()
  }

  obtenerLogueado(){
    this.authService.getUserLogged().subscribe(res =>{
    })
  }

}
