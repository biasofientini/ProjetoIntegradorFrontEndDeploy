import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../model/Cart';
import { User } from '../model/User';
import { URL } from './url';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  user: User = new User

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem("token") || "")
  }

  getAllCart() {
    return this.http.get<Cart[]>(`${URL}/cart`, this.token)
  }

  post() {
    return this.http.post<Cart>(`${URL}/cart`, {} ,this.token)
  }

  delete(idCart: number) {
    return this.http.delete(`${URL}/cart/${idCart}` ,this.token)
  }
}
