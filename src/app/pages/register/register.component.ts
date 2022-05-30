import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  usuario = new Usuario()
  passwordRepeat = ''
  error = ''

  constructor(
    private authService: AuthService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  registro(){
    if(this.usuario.mail != ''){
      this.error = ''
    }else{
      this.error = 'No ingresó un correo electrónico'
    }
    if(this.usuario.contrasena === this.passwordRepeat){
      this.authService.register(this.usuario).then(res =>{
        this.route.navigate(['inicio'])
      })
      
    }else{
      this.error = 'Las contraseñas no coinciden'
    }
  }

}
