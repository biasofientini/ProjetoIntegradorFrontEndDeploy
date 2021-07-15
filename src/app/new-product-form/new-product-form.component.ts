import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertComponent } from '../alert/alert.component';
import { Product } from '../model/Product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-new-product-form',
  templateUrl: './new-product-form.component.html',
  styleUrls: ['./new-product-form.component.css']
})
export class NewProductFormComponent implements OnInit {

  @ViewChild('descriptionInput') descriptionInput: ElementRef

  product: Product = new Product()
  alert = AlertComponent

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.product.category = 1 //default


  }

  productCategory(event: any) {
    this.product.category = Number(event.target.value)
  }


  validateInput() {

    if (this.product.name === undefined || this.product.name === '' || this.product.name === null) {
      this.alert.setAlert('Dados inválidos', 'Insira um nome válido', 'agora')
      return false
    }
    if (this.product.description === '' || this.product.description.length < 25 || this.product.description.length > 250) {
      this.alert.setAlert('Dados inválidos', 'Insira uma descrição válida', 'agora')
      return false
    }
    if (this.product.price === undefined || this.product.price < 0 || this.product.price === null) {
      this.alert.setAlert('Dados inválidos', 'Insira um preço válido', 'agora')
      return false
    }
    if (this.product.stock === undefined || this.product.stock < 0 || this.product.stock === null) {
      this.alert.setAlert('Dados inválidos', 'Insira um estoque válido', 'agora')
      return false
    }
    if (this.product.urlImage === undefined || this.product.urlImage === '' || this.product.urlImage === null) {
      this.alert.setAlert('Url inválida', 'Insira uma url válida', 'agora')
      return false
    }
    return true
  }


  newProduct() {
    if(typeof this.product.description === 'undefined'){
      alert("Atenção! Para cadastrar um novo produto é necessário informar uma descrição de no mínimo 25 caracteres.")
     //this.alert.setAlert('Dados inválidos', 'Insira uma descrição válida', 'agora') --> Não estou conseguindo usar esse tipo de alert aqui para o caso de undefined
   } else {
    if (!this.validateInput()) return
    this.productService.postProduct(this.product).subscribe((resp: Product) => {
      this.product = resp
      this.alert.setAlert('Produto cadastrado', `${this.product.name} cadastrado com sucesso`, 'agora', 2000)
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/admin/produto/cadastrar']);
    })
   }
  }

  cancel() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/admin/produto/cadastrar']);
  }
}
