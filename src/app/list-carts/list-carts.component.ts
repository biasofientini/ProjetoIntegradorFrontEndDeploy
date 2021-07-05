import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/Cart';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-list-carts',
  templateUrl: './list-carts.component.html',
  styleUrls: ['./list-carts.component.css']
})
export class ListCartsComponent implements OnInit {

  listCarts: Cart[]

  constructor(
    private authCart: CartService
  ) { }

  ngOnInit(): void {
    this.findAllCarts()
  }

  findAllCarts() {
    this.authCart.getAllCart().subscribe((resp: Cart[]) => {
      this.listCarts = resp
    })
  }

}
