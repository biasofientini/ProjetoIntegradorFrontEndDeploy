import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { AllProductsService } from '../service/all-products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  listProducts: Product[]

  constructor(
    private allProductsService: AllProductsService
  ) { }

  ngOnInit(): void {
    this.findAllProducts()
  }

  findAllProducts() {
    this.allProductsService.getAllProducts().subscribe((resp: Product[]) => {
      this.listProducts = resp.map(p => {
        const pp = new Product()
        pp.id = p.id
        if(p.category == '1') {
          pp.category = 'Alimentos'
        } 
        else if(p.category == '2'){
          pp.category = 'Vestuário'
        }
        else if(p.category == '3'){
          pp.category = 'Utensílios'
        }
        else if(p.category == '4'){
          pp.category = 'Acessórios'
        }
        else if(p.category == '5'){
          pp.category = 'Bem Estar'
        }
        else{
          pp.category = ''
        }
        pp.description = p.description
        pp.stock = p.stock
        pp.name = p.name
        pp.price = p.price
        pp.urlImage = p.urlImage
        return pp
      })
    })
  }

}
