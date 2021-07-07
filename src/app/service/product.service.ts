import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';
<<<<<<< HEAD
import { URL } from './url';
=======

>>>>>>> 26f8b37bd6b244e1ad77d8419224cc82c15060c7

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem("token") || "")
  }

  postProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${URL}/product`, product, this.token)
  }

  deleteProduct(id: number) {
    return this.http.delete<Product>(`${URL}/product/${id}`, this.token)
  }
}