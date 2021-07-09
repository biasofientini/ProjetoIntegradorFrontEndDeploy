import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  allProducts() {
    this.router.navigate(['/produtos'])
  }

  desvendandoStack(){
    this.router.navigate(['/stack'])
  }

  cadastro() {
    this.router.navigate(['/cadastrar'])
  }

  about() {
    this.router.navigate(['/sobre'])
  }

}
