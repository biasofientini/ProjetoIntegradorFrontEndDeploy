import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AlertComponent } from '../alert/alert.component';
import { Product } from '../model/Product';
import { AllProductsService } from '../service/all-products.service';

declare var bootstrap: any

@Component({
  selector: '[app-new-product]',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  @ViewChild('component') component: ElementRef
  @ViewChild('modalComponent') modalComponent: ElementRef

  @Input() p: Product
  categoryName: string = ''
  alert = AlertComponent

  constructor(
    private allProductsService: AllProductsService
  ) { }

  ngOnInit(): void {
    if (this.p.category == 1) {
      this.categoryName = 'Alimentos'
    }
    else if (this.p.category == 2) {
      this.categoryName = 'Vestuário'
    }
    else if (this.p.category == 3) {
      this.categoryName = 'Utensílios'
    }
    else if (this.p.category == 4) {
      this.categoryName = 'Acessórios'
    }
    else if (this.p.category == 5) {
      this.categoryName = 'Bem Estar'
    }
    else {
      this.categoryName = ''
    }
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