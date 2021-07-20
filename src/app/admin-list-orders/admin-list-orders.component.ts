import { Component, OnInit } from '@angular/core';
import { Order } from '../model/Order';
import { User } from '../model/User';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-admin-list-orders',
  templateUrl: './admin-list-orders.component.html',
  styleUrls: ['./admin-list-orders.component.css']
})
export class AdminListOrdersComponent implements OnInit {

  constructor(
    private authOrder: OrderService
  ) { }

  pedingOrders: Order[] = []
  order: Order = new Order()
  user: User = new User()

  ngOnInit(): void {
    this.findAllOrders()

  }

  /**
   * for(let i=1; i < cartItems.length; i++){
        first.productQty += cartItems[i].productQty
        //this.authCartItem.delete(cartItems[i].id).subscribe()
      }
   */

  findAllOrders(){
    this.authOrder.adminGetAll().subscribe((orders: Order[]) => {
      this.pedingOrders = orders.filter((order: Order) => order.status == "Em separação")
    })
  }
}
