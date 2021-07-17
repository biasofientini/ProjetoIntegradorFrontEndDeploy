import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';
import { URL } from './url';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  token() {
    return {headers: new HttpHeaders().set('Authorization', localStorage.getItem("token") || "")}
  }

  postProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${URL}/product`, product, this.token())
  }

  putProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${URL}/product/${product.id}`, product, this.token())
  }

  getProductsByCatogories(category: string): Observable<Product[]>{
    return this.http.get<Product[]>(`${URL}/product/category/${category}`)
  }

  getProductsByDescription(description: string):Observable<Product[]>{
    let  descriptionP = new HttpParams().set('description', description)
    return this.http.get<Product[]>(`${URL}/product?${descriptionP}`)
  }
}
