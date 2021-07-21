import { User } from './../model/User';
import { Order } from '../model/Order';
import { Component, Input, OnInit } from '@angular/core';
import { OrderItem } from '../model/OrderItem';
import { OrderItemService } from '../service/order-item.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input() o: Order
  finalPrice: number = 0
  totalItems: number = 0
  date: string
  id: number

  listOrderItems: OrderItem[] = []

  constructor(
    private authOrderItem: OrderItemService
  ) { }

  computeOrder({price, qty}: {price: number, qty: number}){
    this.finalPrice += price * qty
    this.totalItems += qty
  }

  ngOnInit(): void {
    this.findAllOrderItems()
    this.date = this.o.date
    this.id = this.o.id
  }

  findAllOrderItems() {
    this.finalPrice = this.o.finalPrice
    this.authOrderItem.getAllByOrderId(this.o.id).subscribe((listOrderItems: OrderItem[]) => {
      this.listOrderItems = listOrderItems
    })
  }
}
