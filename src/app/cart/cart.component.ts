import { CartItem } from './../model/CartItem';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/Cart';
import { CartItemService } from '../service/cart-item.service';
import { OrderService } from '../service/order.service';
import { Order } from '../model/Order';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() c: Cart
  listCartItems: CartItem[] = []
  finalPrice: number = 0
  totalItems = 0

  constructor(
    private authCartItem: CartItemService,
    private authOrder: OrderService
  ) { }

  ngOnInit(): void {
    this.findAllCartItems()
  }

  computeCart({price, qty}: {price: number, qty: number}){
    this.finalPrice += price * qty
    this.totalItems += qty
  }

  findAllCartItems() {
    this.authCartItem.getAllByCartId(this.c.id).subscribe((listCartItems: CartItem[]) => {
      this.listCartItems = listCartItems
    })
  }

  checkout() {
    this.authOrder.post(this.c.id).subscribe((x: Order) => {
      alert('Compra realizada com sucesso')
    })
  }
}
