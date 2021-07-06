import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { OrderItem } from '../model/OrderItem';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL } from './url';

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem("token") || "")
  }

  getAllByOrderId(idOrder: number): Observable<OrderItem[]>{
     return this.http.get<OrderItem[]> (`${URL}/orderitem?idOrder=${idOrder}`, this.token)
  }
}
