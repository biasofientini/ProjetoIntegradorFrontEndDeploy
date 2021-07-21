import { Component, Input, OnInit } from '@angular/core';
import { AlertComponent } from '../alert/alert.component';
import { Cart } from '../model/Cart';
import { CartItem } from '../model/CartItem';
import { Product } from '../model/Product';
import { ProductComponent } from '../product/product.component';
import { CartItemService } from '../service/cart-item.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-product-horizontal',
  templateUrl: './product-horizontal.component.html',
  styleUrls: ['./product-horizontal.component.css']
})
export class ProductHorizontalComponent extends ProductComponent implements OnInit{

}
