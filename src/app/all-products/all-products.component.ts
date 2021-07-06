import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { AllProductsService } from '../service/all-products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  listProducts: Product[]

  constructor(
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
}
