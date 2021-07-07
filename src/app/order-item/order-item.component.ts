import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrderItem } from '../model/OrderItem';
import { Product } from '../model/Product';
import { AllProductsService } from '../service/all-products.service';

interface Item {
  productQty: number,
  name: string,
  price: number,
  urlImage: string
}

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  @Output() newProductEvent = new EventEmitter<{price: number, qty: number}>()

  @Input() orderItem: OrderItem
  item: Item = {
    productQty: 0,
    name: "",
    price: 0,
    urlImage: ""
  }

  constructor(
    private allProductsService: AllProductsService
  ) { }

  ngOnInit(): void {
    this.getInfo()
  }

  getInfo(){ 
    this.allProductsService.getById(this.orderItem.productId).subscribe((product: Product) => {
      this.item.productQty = this.orderItem.quantity
      this.item.name = product.name
      this.item.price = this.orderItem.unitPrice
      this.item.urlImage = product.urlImage
      this.newProductEvent.emit({
        price: this.item.price,
        qty: this.item.productQty
      })
    })
  }
}