import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.scss']
})
export class TopmenuComponent implements OnInit {

  userLogged = this.authService.getUserLogged()

  constructor(
    private authService: AuthService,
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
