import { Product } from './../model/Product';
import { Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CartItem } from '../model/CartItem';
import { AllProductsService } from '../service/all-products.service';
import { EventEmitter } from '@angular/core';


interface Item {
  productQty: number,
  name: string,
  price: number,
  urlImage: string
}

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Output() newProductEvent = new EventEmitter<{price: number, qty: number}>()

  @Input() cartItem: CartItem

  item: Item = {
    productQty: 0,
    name: "",
    price: 0,
    urlImage: ""
  }

  constructor(
    private allProductsService: AllProductsService
  ) {}

  ngOnInit(): void {
    this.getInfo()
  }

  getInfo(){ 
    this.allProductsService.getById(this.cartItem.productId).subscribe((product: Product) => {
      this.item.productQty = this.cartItem.productQty
      this.item.name = product.name
      this.item.price = product.price
      this.item.urlImage = product.urlImage
      let cost = 
      this.newProductEvent.emit({
        price: this.item.price,
        qty: this.item.productQty
      })
    })
  }
}
