import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario = new Usuario()
  error = ''

  constructor(
    private authService: AuthService,
    private route: Router
  ) { }

  ngOnInit(): void {
    
  }

  ingresar(){
    if(this.usuario.mail != '' && this.usuario.contrasena != ''){
      this.authService.login(this.usuario).then(res =>{
        this.route.navigate(['inicio'])
        this.error = ''
      })
    }else{
      this.error = 'Complete todos los datos'
    }
  }

  ingresarConGoogle(){
      this.authService.loginWithGoogle(this.usuario).then(res =>{
        this.route.navigate(['inicio'])
        this.error = ''
      })
    
  }

}
