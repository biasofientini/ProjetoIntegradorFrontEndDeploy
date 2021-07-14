import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertComponent } from '../alert/alert.component';
import { Product } from '../model/Product';
import { AllProductsService } from '../service/all-products.service';
import { ProductService } from '../service/product.service';

declare var bootstrap: any

@Component({
  selector: '[app-new-product]',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  @ViewChild('component') component: ElementRef
  @ViewChild('modalComponent') modalComponent: ElementRef
  @ViewChild('modalComponentUpdateP') modalComponentUpdateP: ElementRef

  @Input() p: Product
  categoryName: string = ''
  alert = AlertComponent

  constructor(
    private allProductsService: AllProductsService,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  productCategory(event: any) {
    this.p.category = Number(event.target.value)
  }

  getCategoryName(category: number): string {
    if(category == 1) {
      return 'Alimentos'
    } 
    else if(category == 2){
      return 'Vestuário'
    }
    else if(category == 3){
      return 'Utensílios'
    }
    else if(category == 4){
      return 'Acessórios'
    }
    else if(category == 5){
      return 'Bem-estar'
    }
    else{
      return''
    }
  }
  validateInput() {
    if (this.p.description === undefined || this.p.description === '') {
      this.alert.setAlert('Dados inválidos', 'Insira uma descrição válida', 'agora')
      return false
    }
    if (this.p.name === undefined || this.p.name === '') {
      this.alert.setAlert('Dados inválidos', 'Insira um nome válido', 'agora')
      return false
    }
    if (this.p.price === undefined || this.p.price < 0) {
      this.alert.setAlert('Dados inválidos', 'Insira um preço válido', 'agora')
      return false
    }
    if (this.p.stock === undefined || this.p.stock < 0) {
      this.alert.setAlert('Dados inválidos', 'Insira um estoque válido', 'agora')
      return false
    }
    if (this.p.urlImage === undefined || this.p.urlImage === '') {
      this.alert.setAlert('Url inválida', 'Insira uma url válida', 'agora')
      return false
    }
    return true
  }
  showUpdateProduct(){
    const modal = new bootstrap.Modal(this.modalComponentUpdateP.nativeElement)
    modal.show()
  }

  updateProduct(){
    if (!this.validateInput()) return
    this.productService.putProduct(this.p).subscribe((resp: Product) =>{
      this.p = resp
      this.alert.setAlert('🎉 Tudo certo', `O produto ${this.p.name} foi atualizado com sucesso!`, 'agora', 3000)
    })
  }

  showPreviewProduct(){
    const modal = new bootstrap.Modal(this.modalComponent.nativeElement)
    modal.show()
  }

  deleteProduct() {
    this.allProductsService.deleteById(this.p.id!).subscribe(() => {
      this.alert.setAlert('Remoção', `${this.p.name} removido com sucesso`, 'agora')
      const collapse = new bootstrap.Collapse(
        this.component.nativeElement, 
        {toggle: false}
      )
      collapse.hide()
    },
    () => this.alert.setAlert(`Erro ao apagar produto`, ` Erro ao apagar ${this.p.name}, possivelmente o produto está associado a alguma ordem de algum cliente`, 'agora')
    )
  }
}