import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';
import { ProductDTO } from '../model/ProductDTO';

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

  postProduct(product: Product): Observable<Product>{
    return this.http.post<Product>('http://localhost:8080/product',product, this.token)
  }
}
