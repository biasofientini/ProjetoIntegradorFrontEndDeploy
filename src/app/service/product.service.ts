import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDTO } from '../model/ProductDTO';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  postProduct(product: ProductDTO): Observable<ProductDTO>{
    return this.http.post<ProductDTO>('http://localhost:8080/product',product)
  }
}
