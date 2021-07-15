import { Product } from '../model/Product';
import { Component, OnInit} from '@angular/core';
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
  p: Product = new Product
  idCategory: number
  categoryEnum: string
  categoryName: string
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

    if(this.idCategory === 0 || typeof this.idCategory === 'undefined'){
      this.findAllProducts()
    }
    if(this.idCategory === 1){
      this.categoryEnum = 'ALIMENTOS'
      this.categoryName = 'alimentos'
    }
    if(this.idCategory === 2 ){
      this.categoryEnum = 'VESTUARIO'
      this.categoryName = 'vestuário'
    }
    if(this.idCategory === 3){
      this.categoryEnum = 'UTENSILIOS'
      this.categoryName = 'utensílios'
    }
    if(this.idCategory === 4){
      this.categoryEnum = 'ACESSORIOS'
      this.categoryName = 'acessórios'
    } 
    if(this.idCategory === 5){
      this.categoryEnum = 'BEMESTAR'
      this.categoryName = 'bem-estar'
    }

    this.productService.getProductsByCatogories(this.categoryEnum).subscribe((resp: Product[]) =>{
    this.listProducts = resp
    }, 
    () => this.alert.setAlert(`Erro!`, ` Erro ao buscar por ${this.categoryName}, não há produtos cadastrados nessa categoria.`, 'agora')
    )

  }
  findAllProducts() {
    this.allProductsService.getAllProducts().subscribe((resp: Product[]) => {
      this.listProducts = resp
    })
  }

  findProductsByDescription(){

    this.productService.getProductsByDescription(this.p.description).subscribe((resp: Product[]) => {
      this.listProducts = resp
    })
  }

}