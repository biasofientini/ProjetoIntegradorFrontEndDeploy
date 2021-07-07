import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { AllProductsService } from '../service/all-products.service';
import { ProductService } from '../service/product.service';


@Component({
  selector: 'app-product-list-adm',
  templateUrl: './product-list-adm.component.html',
  styleUrls: ['./product-list-adm.component.css']
})
export class ProductListAdmComponent implements OnInit {

  listProducts: Product[]
  idProduct: number
  
  constructor(
    private allProductsService: AllProductsService,
    private productService: ProductService

  ) { }

  ngOnInit() {
    this.findAllProducts()
  
  }

  findAllProducts(){
    this.allProductsService.getAllProducts().subscribe((resp: Product[]) => {
      this.listProducts = resp
    })
  }

  selectProduct(id: number){
    this.idProduct = Number(id)
  }

  eraseProduct(){
    this.productService.deleteProduct(this.idProduct).subscribe(() => {
      alert('Produto foi apagado com sucesso!')
      
    }, erro => {
      if (erro.status == 403) {
        alert('Acesso negado!')
      }
    })
  }
}
