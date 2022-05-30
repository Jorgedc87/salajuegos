import { Component, OnInit } from '@angular/core';
import { PptService } from 'src/app/services/ppt.service';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.scss']
})
export class PiedraPapelTijeraComponent implements OnInit {

  constructor(
    public pptService: PptService
  ) { }

  ngOnInit(): void {
  }

  

}
