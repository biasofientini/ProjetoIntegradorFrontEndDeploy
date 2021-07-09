import { Component, OnInit } from '@angular/core';
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
    if (this.product.description === undefined || this.product.description === '') {
      this.alert.setAlert('Dados inválidos', 'Insira uma descrição válida', 'agora')
      return false
    }
    if (this.product.name === undefined || this.product.name === '') {
      this.alert.setAlert('Dados inválidos', 'Insira um nome válido', 'agora')
      return false
    }
    if (this.product.price === undefined || this.product.price < 0) {
      this.alert.setAlert('Dados inválidos', 'Insira um preço válido', 'agora')
      return false
    }
    if (this.product.stock === undefined || this.product.stock < 0) {
      this.alert.setAlert('Dados inválidos', 'Insira um estoque válido', 'agora')
      return false
    }
    if (this.product.urlImage === undefined || this.product.urlImage === '') {
      this.alert.setAlert('Url inválida', 'Insira uma url válida', 'agora')
      return false
    }
    return true
  }

  newProduct() {
    if (!this.validateInput()) return
    this.productService.postProduct(this.product).subscribe((resp: Product) => {
      this.product = resp
      this.alert.setAlert('Produto cadastrado', `${this.product.name} cadastrado com sucesso`, 'agora', 2000)
      this.router.navigate(['admin/produto'])
    })
  }
}
