
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../model/Order';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL } from './url';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem("token") || "")
  }

  post(idCart: number): Observable<Order> {
    return this.http.post<Order>(`${URL}/order`, {cartId: idCart}, this.token)
  }

  getAll(): Observable<Order[]> {
    return this.http.get<Order[]>(`${URL}/order/u`, this.token)
  }

  getById(id: number) {
    return this.http.get<Order[]>(`${URL}/order/u/${id}`, this.token)
  }

  adminGetAll(): Observable<Order[]> {
    return this.http.get<Order[]>(`${URL}/order/a`, this.token)
  }

  adminGetById(id: number) {
    return this.http.get<Order[]>(`${URL}/order/a/${id}`, this.token)
  }

  update(order: Order){
    return this.http.put<Order>(`${URL}/order/${order.id}`, order, this.token)
  }
}
