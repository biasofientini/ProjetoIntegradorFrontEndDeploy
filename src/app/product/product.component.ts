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
  categoryName: string = ''

  constructor(
    private authCartItem: CartItemService
  ) { }

  ngOnInit() {
    if(this.p.category == 1) {
      this.categoryName = 'Alimentos'
    } 
    else if(this.p.category == 2){
      this.categoryName = 'Vestuário'
    }
    else if(this.p.category == 3){
      this.categoryName = 'Utensílios'
    }
    else if(this.p.category == 4){
      this.categoryName = 'Acessórios'
    }
    else if(this.p.category == 5){
      this.categoryName = 'Bem Estar'
    }
    else{
      this.categoryName = ''
    }
  }

  addToCart() {
    this.authCartItem.post(1, this.p.id!).subscribe((c: CartItem) => {
      console.log('success! product, added', c)
      alert('Produto adicionado com sucesso')      
    })
  }
}