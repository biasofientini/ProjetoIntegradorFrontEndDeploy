import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../model/Cart';
import { CartItem } from '../model/CartItem';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  user: User = new User

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem("token")||"")
  }

  getAllCart() {
    return this.http.get<Cart[]>('http://localhost:8080/cart', this.token)
  }
  
}
