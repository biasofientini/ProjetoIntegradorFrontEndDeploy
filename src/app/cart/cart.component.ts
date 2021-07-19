import { UserService } from './../service/user.service';
import { CartService } from './../service/cart.service';
import { CartItem } from './../model/CartItem';
import { Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/Cart';
import { CartItemService } from '../service/cart-item.service';
import { OrderService } from '../service/order.service';
import { Order } from '../model/Order';
import { AlertComponent } from '../alert/alert.component';
import { User } from '../model/User';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Output() cartEvent = new EventEmitter()
  
  @ViewChild('component') component: ElementRef
  alert = AlertComponent
  @Input() c: Cart
  listCartItems: CartItem[] = []
  totalItems = 0
  processingOrder: boolean = false
  user: User = new User()
  finalPriceWithoutDiscount: number = 0
  

  constructor(
    private authCartItem: CartItemService,
    private authOrder: OrderService,
    private authCart: CartService,
    private authUser: UserService
  ) { }

  getDiscount(): number {
    let value = this.user.points/10
    return Math.min(value, this.finalPriceWithoutDiscount)
  }

  ngOnInit(): void {
    this.findAllCartItems()
    this.findUser()
  }

  computeCart({ price, qty }: { price: number, qty: number }) {
    this.finalPriceWithoutDiscount += price * qty
    this.totalItems += qty

  }

  findAllCartItems() {
    this.authCartItem.getAllByCartId(this.c.id).subscribe((listCartItems: CartItem[]) => {
      this.listCartItems = this.groupProducts(listCartItems)
    })
  }

  checkout() {
    this.processingOrder = true
    this.authOrder.post(this.c.id).subscribe((order: Order) => {
      this.alert.setAlert('😍 Tudo certo', `Compra realizada com sucesso! Total gasto: R$ ${order.finalPrice.toFixed(2)}. Você acaba de conribuir com R$ ${(order.finalPrice * 0.1).toFixed(2)} para uma ONG`, 'agora', 10000)
      this.processingOrder = false
      this.authCart.post().subscribe(() => {
        this.cartEvent.emit()
      })
    },
    () => {
      this.processingOrder = false
      this.finalPriceWithoutDiscount = 0
      this.totalItems = 0
      this.findAllCartItems()
      this.alert.setAlert('Erro ao efetuar compra', 'Por favor, selecione uma válida para cada item', 'agora')
    })
  }

  deleteCart(){
    this.authCart.delete(this.c.id).subscribe(() => {
      this.alert.setAlert('Carrinho removido', 'Carrinho removido com sucesso', 'agora')
      this.cartEvent.emit()
    })
  }

  findUser(){
    this.authUser.getById(Number(localStorage.getItem("idUser") || "" )).subscribe((user: User) => {
      this.user = user
    })
  }

  groupProducts(products: CartItem[]): any{
    const counter = new Map<number, CartItem[]>()
    products.forEach((c: CartItem) => {
      if(counter.has(c.productId)){
        const newCartItemArray = [...counter.get(c.productId)||[], c]
        counter.set(c.productId, newCartItemArray)
      }
      else{
        counter.set(c.productId, [c])
      }
    })
    const arrayProducts: CartItem[] = []
    counter.forEach((cartItems: CartItem[]) => {
      const first = cartItems[0]
      for(let i=1; i < cartItems.length; i++){
        first.productQty += cartItems[i].productQty
        //this.authCartItem.delete(cartItems[i].id).subscribe()
      }
      //this.authCartItem.update(first).subscribe()
      arrayProducts.push(first)
    })
    return arrayProducts
  }
}