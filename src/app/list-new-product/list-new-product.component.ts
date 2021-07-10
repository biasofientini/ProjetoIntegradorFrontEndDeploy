import { Product } from '../model/Product';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AllProductsService } from '../service/all-products.service';
import { ProductService } from '../service/product.service';
import { AlertComponent } from '../alert/alert.component';


@Component({
  selector: 'app-list-new-product',
  templateUrl: './list-new-product.component.html',
  styleUrls: ['./list-new-product.component.css']
})
export class ListNewProductComponent implements OnInit {


  listProducts: Product[] = []
  idCategory: number
  category: string
  alert = AlertComponent

  constructor(
    private allProductsService: AllProductsService,
    private productService: ProductService
  ){}
  
  ngOnInit(): void {
   this.findAllProducts()
  }

  findProductsByCategory(event: any){
    this.idCategory = Number(event.target.value)

    if(this.idCategory == 0){
      this.findAllProducts()
    }
    if(this.idCategory == 1){
      this.category = 'ALIMENTOS'
    }
    if(this.idCategory == 2 ){
      this.category = 'VESTUARIO'
    }
    if(this.idCategory==3){
      this.category = 'UTENSILIOS'
    }
    if(this.idCategory==4){
      this.category = 'ACESSORIOS'
    } 
    if(this.idCategory==5){
      this.category = 'BEMESTAR'
    }
    this.productService.getProductsByCatogories(this.category).subscribe((resp: Product[]) =>{
    this.listProducts = resp
    },
    () => this.alert.setAlert(`Erro!`, ` Erro ao buscar por ${this.category}, possivelmente não há produtos cadastrados nessa categoria.`, 'agora')
    )

  }
  findAllProducts() {
    this.allProductsService.getAllProducts().subscribe((resp: Product[]) => {
      this.listProducts = resp
    })
  }

}