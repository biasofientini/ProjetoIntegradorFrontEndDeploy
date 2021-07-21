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

  @ViewChild('nameInput') nameInput: ElementRef
  @ViewChild('descriptionInput') descriptionInput: ElementRef
  @ViewChild('imageInput') imageInput: ElementRef
  @ViewChild('stockInput') stockInput: ElementRef
  @ViewChild('priceInput') priceInput: ElementRef

  product: Product = new Product()
  alert = AlertComponent

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  productCategory(event: any) {
    this.product.category = Number(event.target.value)
  }


  validateInput() {

    if (this.product.name === undefined || this.product.name === '' || this.product.name === null || this.nameInput.nativeElement.value === '' || this.nameInput.nativeElement.value === null) {
      this.alert.setAlert('⚠️ Nome inváldio', 'Insira um nome para o produto válido .', 'agora')
      return false
    }
    if (this.product.description === undefined || this.product.description.length < 6 || this.product.description.length > 250 || this.descriptionInput.nativeElement.value === '' || this.descriptionInput.nativeElement.value === null || this.descriptionInput.nativeElement.length < 6 || this.descriptionInput.nativeElement > 250) {
      this.alert.setAlert('⚠️ Descrição inválida', 'Insira uma descrição válida.', 'agora')
      return false
    }
    if (this.product.urlImage === undefined || this.product.urlImage === '' || this.product.urlImage === null || this.imageInput.nativeElement.value === '' || this.imageInput.nativeElement.value === null) {
      this.alert.setAlert('⚠️ Url inválida', 'Insira uma url válida.', 'agora')
      return false
    }
    if (this.product.stock === undefined || this.product.stock <= 0 || this.product.stock === null || this.stockInput.nativeElement.value <= 0 || this.stockInput.nativeElement.value === null) {
      this.alert.setAlert('⚠️ Estoque inválido', 'Insira um estoque válido.', 'agora')
      return false
    }
    if (this.product.price === undefined || this.product.price <= 0 || this.product.price === null || this.priceInput.nativeElement.value <= 0 || this.priceInput.nativeElement.value === null) {
      this.alert.setAlert('⚠️ Preço inválido', 'Insira um preço válido.', 'agora')
      return false
    }
    return true
  }


  newProduct() {
    if (!this.validateInput()) return
    this.productService.postProduct(this.product).subscribe((resp: Product) => {
      this.product = resp
      this.alert.setAlert('🎉 Produto cadastrado', `${this.product.name} cadastrado com sucesso.`, 'agora', 3000)
      // this.product = new Product()
      this.nameInput.nativeElement.value = ''
      this.descriptionInput.nativeElement.value = ''
      this.imageInput.nativeElement.value = ''
      this.stockInput.nativeElement.value = 0
      this.priceInput.nativeElement.value = 0
      this.product.category = 1
    })

  }

  cancel() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/admin/produto/cadastrar']);
  }
}
