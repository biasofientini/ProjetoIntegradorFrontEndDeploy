import { AlertComponent } from './../alert/alert.component';
import { Product } from './../model/Product';
import { Input, Output, ViewChild, ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CartItem } from '../model/CartItem';
import { AllProductsService } from '../service/all-products.service';
import { EventEmitter } from '@angular/core';
import { CartItemService } from '../service/cart-item.service';

declare var bootstrap: any

interface Item {
  productQty: number,
  name: string,
  price: number,
  urlImage: string,
  productQtyAvailable: number
}

@Component({
  selector: '[app-cart-item]',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Output() productEvent = new EventEmitter<{price: number, qty: number}>()
  
  alert = AlertComponent
  @Input() cartItem: CartItem
  @ViewChild('component') component: ElementRef

  item: Item = {
    productQty: 0,
    name: "",
    price: 0,
    urlImage: "",
    productQtyAvailable: 0
  }

  constructor(
    private allProductsService: AllProductsService,
    private authCartItemService: CartItemService
  ) {}

  ngOnInit(): void {
    this.getInfo()
  }

  increaseQty(){
    this.item.productQty++
    this.updateCartItem()
  }

  decreaseQty(){
    if(this.item.productQty-1 > 0){
      this.item.productQty--
      this.updateCartItem()
    }
  }

  updateCartItem(){
    this.productEvent.emit({
      price: this.item.price,
      qty: this.item.productQty - this.cartItem.productQty
    })
    this.cartItem.productQty = this.item.productQty

    this.authCartItemService.update(this.cartItem).subscribe((cartItem: CartItem) => {
      this.alert.setAlert('🔥 Atualização', `${this.item.name} foi atualizado para ${cartItem.productQty} itens`, 'agora')
    })
  }

  removeItem(){
    this.authCartItemService.delete(this.cartItem.id).subscribe(() => {
      this.productEvent.emit({
        price: this.item.price,
        qty: -this.item.productQty
      })
      this.alert.setAlert(
        '✔️ Remoção', 
        `${this.item.name} removido com sucesso`,
        'agora'
      )
      const collapse = new bootstrap.Collapse(
        this.component.nativeElement, 
        {toggle: false}
      )
      collapse.hide()
    })
  }

  getInfo(){ 
    this.allProductsService.getById(this.cartItem.productId).subscribe((product: Product) => {
      this.item.productQty = this.cartItem.productQty
      this.item.name = product.name
      this.item.price = product.price
      this.item.urlImage = product.urlImage
      this.item.productQtyAvailable = product.stock
      this.productEvent.emit({
        price: this.item.price,
        qty: this.item.productQty
      })
    })
  }
}
