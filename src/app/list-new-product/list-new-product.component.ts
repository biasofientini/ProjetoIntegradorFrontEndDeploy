import { Product } from '../model/Product';
import { Component, OnInit } from '@angular/core';
import { AllProductsService } from '../service/all-products.service';

@Component({
  selector: 'app-list-new-product',
  templateUrl: './list-new-product.component.html',
  styleUrls: ['./list-new-product.component.css']
})
export class ListNewProductComponent implements OnInit {
  
  listProducts: Product[] = []

  constructor(
    private allProductsService: AllProductsService
  ){}
  
  ngOnInit(): void {
    this.findAllProducts()
  }

  findAllProducts() {
    this.allProductsService.getAllProducts().subscribe((resp: Product[]) => {
      this.listProducts = resp
    })
  }
}