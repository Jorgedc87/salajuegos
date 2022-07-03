import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-noauth',
  templateUrl: './noauth.component.html',
  styleUrls: ['./noauth.component.scss']
})
export class NoauthComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  volverAtras(): void{
    this.location.back();
  }

}
