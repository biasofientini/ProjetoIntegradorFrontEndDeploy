import { CartItemService } from './../service/cart-item.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { CartItem } from '../model/CartItem';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() p: Product

  constructor(
    private authCartItem: CartItemService
  ) { }

  ngOnInit() {
  }

  addToCart() {
    this.authCartItem.post(1, this.p.id).subscribe((c: CartItem) => {
      console.log('success! product, added', c)
      alert('Produto adicionado com sucesso')      
    })
  }
}
