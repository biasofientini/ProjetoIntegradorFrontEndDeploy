import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  tipoTemplate: number
  
  constructor() { }

  ngOnInit() {
  }

  changeTipoTemplate(tipo: number) {
    this.tipoTemplate = tipo;
  }

}
