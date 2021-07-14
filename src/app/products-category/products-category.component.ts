import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertComponent } from '../alert/alert.component';
import { Product } from '../model/Product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css']
})
export class ProductsCategoryComponent implements OnInit {

  @Input() idCategory: number
  categoryEnum: string
  categoryName: string
  listProducts: Product[]
  alert = AlertComponent
  maxItemsPage: number = 12
  currentPage: number = 0
  numberOfPages: number
  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.findProductsByCategory()
  }

  findProductsByCategory(){

    if(this.idCategory == 1){
      this.categoryEnum = 'ALIMENTOS'
      this.categoryName = 'alimentos'
    }
    if(this.idCategory == 2 ){
      this.categoryEnum = 'VESTUARIO'
      this.categoryName = 'vestuário'
    }
    if(this.idCategory == 3){
      this.categoryEnum = 'UTENSILIOS'
      this.categoryName = 'utensílios'
    }
    if(this.idCategory == 4){
      this.categoryEnum = 'ACESSORIOS'
      this.categoryName = 'acessórios'
    } 
    if(this.idCategory == 5){
      this.categoryEnum = 'BEMESTAR'
      this.categoryName = 'bem-estar'
    }
    this.productService.getProductsByCatogories(this.categoryEnum).subscribe((resp: Product[]) =>{
      resp = resp.filter((p: Product) => p.stock > 0)
      this.listProducts = resp
      this.numberOfPages = Math.ceil(resp.length/this.maxItemsPage)
    }, 
    () => this.alert.setAlert(`Erro!`, ` Erro ao buscar por ${this.categoryName}, não há produtos cadastrados nessa categoria.`, 'agora')
    )
  }

  changePage(index: number) {
    this.currentPage = index
  }

  decreasePage() {
    if(this.currentPage - 1 >= 0){
      this.currentPage--
    }
  }

  increasePage() {
    if(this.currentPage + 1 < this.numberOfPages){
      this.currentPage++
    }
  }

}
