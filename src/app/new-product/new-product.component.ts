import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AlertComponent } from '../alert/alert.component';
import { Product } from '../model/Product';
import { AllProductsService } from '../service/all-products.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  @Input() p: Product
  categoryName: string = ''
  deleted: boolean = false
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

  deleteProduct() {
    this.allProductsService.deleteById(this.p.id!).subscribe(() => {
      this.alert.setAlert('Remoção', `${this.p.name} removido com sucesso`, 'agora')
      this.deleted = true
    })
  }
}