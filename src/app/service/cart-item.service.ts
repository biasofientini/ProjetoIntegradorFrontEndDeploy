import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../model/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {

  constructor(
    private http: HttpClient
  ) { }

  getAllByCartId(idCart: number): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(`http://localhost:8080/item?idCart=${idCart}`)
  }

}
