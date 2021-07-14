import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/Cart';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-list-carts',
  templateUrl: './list-carts.component.html',
  styleUrls: ['./list-carts.component.css']
})
export class ListCartsComponent implements OnInit {

  listCarts: Cart[] = []

  constructor(
    private authCart: CartService
  ) { }

  ngOnInit(): void {
    this.findAllCarts()
  }
  
  computeCarts(){
    this.findAllCarts()
  }

  findAllCarts() {
    this.authCart.getAllCart().subscribe((listCarts: Cart[]) => {
      listCarts.sort((c1: Cart, c2: Cart) => c1.id - c2.id).reverse()
      this.listCarts = listCarts
      if(this.listCarts.length == 0){
        this.authCart.post().subscribe(() => {
          this.findAllCarts()
        })
      }
    })
  }
}
