import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/Cart';
import { CartItem } from '../model/CartItem';
import { CartItemService } from '../service/cart-item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() c: Cart

  listItems: CartItem[]

  constructor(
    private cartService: CartItemService
  ) { }

  ngOnInit(): void {
    this.findAllCartItems()
  }

  findAllCartItems(id: number) {
    this.cartService.getAllByCartId(id).subscribe((resp: CartItem[]) => {
      this.listItems = resp
    })
  }

}
