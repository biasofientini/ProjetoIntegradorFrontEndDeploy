import { AlertComponent } from './../alert/alert.component';
import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../model/Order';
import { OrderItem } from '../model/OrderItem';
import { User } from '../model/User';
import { OrderItemService } from '../service/order-item.service';
import { OrderService } from '../service/order.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.css']
})
export class AdminOrderComponent implements OnInit {

  @Input() o: Order
  finalPrice: number = 0
  totalItems: number = 0
  date: string
  customer: User = new User()
  listOrderItems: OrderItem[] = []
  alert = AlertComponent

  constructor(
    private authOrderItem: OrderItemService,
    private authOrder: OrderService,
    private authUser: UserService
  ) { }

  computeOrder({price, qty}: {price: number, qty: number}){
    this.finalPrice += price * qty
    this.totalItems += qty
  }

  ngOnInit(): void {
    this.findUser()
    this.findAllOrderItems()
    this.date = this.o.date
  }

  findAllOrderItems() {
    this.finalPrice = this.o.finalPrice
    this.authOrderItem.adminGetAllByOrderId(this.o.id).subscribe((listOrderItems: OrderItem[]) => {
      this.listOrderItems = listOrderItems
    })
  }

  markAsSent(){
    this.o.status = "Enviado"
    this.authOrder.update(this.o).subscribe((order: Order) => {
      this.alert.setAlert('🎉 Sucesso', `Pedido ${this.o.id} marcado como enviado`, 'agora',3000)
    })
  }

  findUser(){
    this.authUser.adminGetById(this.o.userId).subscribe((user: User) => {
      this.customer = user
    })
  }
}
