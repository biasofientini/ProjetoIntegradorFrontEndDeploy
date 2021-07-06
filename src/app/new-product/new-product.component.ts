import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/Product';
import { ProductDTO } from '../model/ProductDTO';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  product: Product = new Product()
  categoryP: number //category é uma string na model Product, porém é um number na model ProductDTO

  constructor(
    private productService: ProductService,
    private router: Router //sem uso por enquanto
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  productCategory(event: any) {
    this.categoryP = event.target.value
  }
  newProduct() {
    this.product.category = this.categoryP
    this.productService.postProduct(this.product).subscribe((resp: Product) => {
      this.product = resp
      alert('Produto cadastrado com sucesso!')
    })
  }
}
