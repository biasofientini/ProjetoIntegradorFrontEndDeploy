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
    window.scroll(0, 0)
  }

  changeTipoTemplate(tipo: number) {
    this.tipoTemplate = tipo;
  }

}
