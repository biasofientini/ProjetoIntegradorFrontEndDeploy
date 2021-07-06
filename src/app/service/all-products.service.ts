import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${URL}/product`)
  }

  getById(idProduct: number){
    return this.http.get<Product>(`${URL}/product/${idProduct}`)
  }
}
