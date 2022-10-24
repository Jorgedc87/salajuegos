import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from 'src/app/models/usuario.model';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public forma!: FormGroup
  usuario = new Usuario()
  error = ''
  email
  password: string
  usuarios: Usuario[]
  disable=0


  constructor(
    private authService: AuthService,
    private route: Router,
    private fb: FormBuilder,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.forma = this.fb.group({
      'contraseña': ['', [Validators.required, Validators.min(6), Validators.max(16)]],
      'email': ['', [Validators.required, Validators.email]]
    });
    this.userService.getUsers().subscribe(resp => {
      this.usuarios = resp
      this.disable=1
    })
  }

  ingresar(){
    // console.log(this.forma.get('contraseña').value)
    if(this.forma.get('contraseña').value != '' && this.forma.get('email').value != ''){
       this.authService.login(this.usuario).then(async(res) =>{
        await this.userService.guardaUsuario(this.usuario.mail)
        this.route.navigateByUrl('inicio')
        // console.log(res)
      }).catch(error => {
        switch(error.code){
          case 'auth/user-not-found':
          this.error = 'El correo no existe'
  
          break;
        }
      })
    }else{
      this.error = 'Complete todos los datos'
    }
  }

  ingresarConGoogle(){
    this.authService.loginWithGoogle(this.usuario).then(res =>{
      this.route.navigate(['inicio'])
      localStorage.setItem('usuario',String(res.user.email))
        this.error = ''
      })
  }

  rellenaDatos(){
    // console.log(this.usuarios)
    this.usuario.mail = this.usuarios[0]['email']
    this.usuario.contrasena = this.usuarios[0]['contraseña']
    console.log(this.forma.value)
    this.forma = this.fb.group({
      'contraseña': [this.usuario.contrasena, [Validators.required, Validators.min(6), Validators.max(16)]],
      'email': [this.usuario.mail, [Validators.required, Validators.email]]
    });
  }

}
