import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/Product';
import { AllProductsService } from '../service/all-products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listProducts: Product[] = []

  constructor(
    private router: Router,
    private allProductsService: AllProductsService
  ) { }

  ngOnInit(): void {
    this.findAllProducts()
  }

  findAllProducts() {
    this.allProductsService.getAllProducts().subscribe((resp: Product[]) => {
      this.listProducts = resp
    })
  }
  allProducts() {
    this.router.navigate(['/produtos'])
  }

  desvendandoStack() {
    this.router.navigate(['/stack'])
  }

  cadastro() {
    this.router.navigate(['/cadastrar'])
  }

  about() {
    this.router.navigate(['/sobre'])
  }

}
