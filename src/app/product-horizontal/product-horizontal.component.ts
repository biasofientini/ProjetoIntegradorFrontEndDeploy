import { Component, Input, OnInit } from '@angular/core';
import { AlertComponent } from '../alert/alert.component';
import { Cart } from '../model/Cart';
import { CartItem } from '../model/CartItem';
import { Product } from '../model/Product';
import { ProductComponent } from '../product/product.component';
import { CartItemService } from '../service/cart-item.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-product-horizontal',
  templateUrl: './product-horizontal.component.html',
  styleUrls: ['./product-horizontal.component.css']
})
export class ProductHorizontalComponent extends ProductComponent implements OnInit{

  // @Input() p: Product
  // cartItem: CartItem | null = null
  // qty: number = 0
  // alert = AlertComponent

  // constructor(
  //   private authCartItem: CartItemService,
  //   private authCart: CartService
  // ) { }

  // getCategoryName(category: number): string {
  //   if(category == 1) {
  //     return 'Alimentos'
  //   } 
  //   else if(category == 2){
  //     return 'Vestuário'
  //   }
  //   else if(category == 3){
  //     return 'Utensílios'
  //   }
  //   else if(category == 4){
  //     return 'Acessórios'
  //   }
  //   else if(category == 5){
  //     return 'Bem-estar'
  //   }
  //   else{
  //     return''
  //   }
  // }
  // ngOnInit() {

  // }

  // increaseQty(){
  //   this.qty++
  //   this.updateCartItem()
  // }

  // decreaseQty(){
  //   if(this.qty == 1){
  //     this.qty--
  //     this.authCartItem.delete(this.cartItem!.id).subscribe(() => {
  //       this.alert.setAlert(
  //         'Remoção', 
  //         `${this.p.name} removido do carrinho com sucesso`,
  //         'agora'
  //       )
  //     })
  //     this.cartItem = null

  //   }
  //   else if(this.qty > 1){
  //     this.qty--
  //     this.updateCartItem()
  //   }
  // }

  // updateCartItem(){
  //   if(this.cartItem === null){
  //     this.addToCart()
  //   }
  //   else{
  //     this.cartItem.productQty = this.qty
  //     this.authCartItem.update(this.cartItem).subscribe((cartItem: CartItem) => {
  //       this.alert.setAlert('Atualização', `${this.p.name} foi atualizado para ${cartItem.productQty} itens`, 'agora')
  //     })
  //   }
  // }

  // async addToCart() {
  //   const carts = await this.authCart.getAllCart().toPromise()
  //   if(carts.length == 0){
  //     carts.push(await this.authCart.post().toPromise())
  //   }
  //   carts.sort((c1: Cart, c2: Cart) => c1.id-c2.id).reverse()
  //   this.authCartItem.post(carts[0].id, this.p.id!).subscribe((cartItem: CartItem) => {
  //     this.alert.setAlert('😄 produto adicionado', `${this.p.name} adiconado ao carrinho`, 'agora', 1500)
  //     this.cartItem = cartItem
  //   })
  // }
}
