import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CartItem } from '../model/CartItem';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() c: CartItem

  constructor() { }

  ngOnInit(): void {
  }

}
