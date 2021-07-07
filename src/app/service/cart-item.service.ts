import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../model/CartItem';
import { URL } from './url';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {
  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem("token") || "")
  }

  getAllByCartId(idCart: number): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(`${URL}/item?idCart=${idCart}`, this.token)
  }

  post(idCart: number, idProduct: number, qty: number=1): Observable<CartItem> {
    const body = {
      cartId: idCart,
      productId: idProduct,
      productQty: qty
    }
    return this.http.post<CartItem>(`${URL}/item`, body, this.token)
  }

  delete(idCartItem: number): Observable<any> {
    return this.http.delete(`${URL}/item/${idCartItem}`, this.token)
  }
}
