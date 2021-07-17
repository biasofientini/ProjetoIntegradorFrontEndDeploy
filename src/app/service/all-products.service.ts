import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../model/Product';
import { Observable } from 'rxjs';
import { URL } from './url';

@Injectable({
  providedIn: 'root'
})
export class AllProductsService {

  constructor(
    private http: HttpClient
  ) { }

  token() {
    return {headers: new HttpHeaders().set('Authorization', localStorage.getItem("token") || "")}
  }

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${URL}/product`)
  }

  getById(idProduct: number): Observable<Product>{
    return this.http.get<Product>(`${URL}/product/${idProduct}`)
  }

  deleteById(idProduct: number): Observable<any>{
    console.log(idProduct)
    return this.http.delete(`${URL}/product/${idProduct}`, this.token())
  }
}
