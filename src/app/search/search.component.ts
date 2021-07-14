import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/Product';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

 
  example: string
  description: string
  listProducts: Product[] = []
  maxItemsPage: number = 12
  currentPage: number = 0
  numberOfPages: number

  constructor(
    private router: Router,
    private productService: ProductService
    ) {
    let navigation = this.router.getCurrentNavigation();
    let state = navigation?.extras.state as { example: string };
    this.example = state.example;
    this.description = this.example;
  }

  ngOnInit() {
    window.scroll(0, 0)
    NavbarComponent.searchObs.subscribe((search: string) => {
      this.example = search
      this.description = this.example
      this.findProductsByDescription()
    })
    this.findProductsByDescription()
  }

  findProductsByDescription(){
    this.productService.getProductsByDescription(this.description).subscribe((resp: Product[]) => {
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
