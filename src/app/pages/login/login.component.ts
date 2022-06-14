import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
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
      this.authService.login(this.usuario).then(res =>{
        this.route.navigate(['inicio'])
        console.log(res)
      }).catch(error => {
        console.log(error.code)
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

  rellenaDatos(){
    console.log(this.usuarios)
    this.usuario.mail = this.usuarios[0]['email']
    this.usuario.contrasena = this.usuarios[0]['contraseña']
    console.log(this.forma)
  }

}
