import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { AllProductsService } from '../service/all-products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  listProducts: Product[] = []
  maxItemsPage: number = 12
  currentPage: number = 0
  numberOfPages: number

  constructor(
    private allProductsService: AllProductsService
  ) { }

  ngOnInit(): void {
    this.findAllProducts()
  }

  findAllProducts() {
    this.allProductsService.getAllProducts().subscribe((resp: Product[]) => {
      resp = resp.filter((p: Product) => p.stock > 0)
      this.listProducts = resp
      this.numberOfPages = Math.ceil(resp.length/this.maxItemsPage)
    })
  }

  changePage(index: number) {
    this.currentPage = index
  }

  decreasePage() {
    if(this.currentPage - 1 >= 0){
      this.currentPage--
    }
  }

  increasePage() {
    if(this.currentPage + 1 < this.numberOfPages){
      this.currentPage++
    }
  }

}