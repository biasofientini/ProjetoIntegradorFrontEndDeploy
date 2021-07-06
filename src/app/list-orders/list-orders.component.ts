import { Order } from './../model/Order';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit {

  constructor(
    private authOrder: OrderService
  ) { }

  listOrders: Order[] = [] 

  ngOnInit(): void {
    this.findAllOrders()
  }

  findAllOrders(){
    this.authOrder.getAll().subscribe((orders: Order[]) => {
      this.listOrders = orders
    })
  }
}
