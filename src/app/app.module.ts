import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PreviewProdutoComponent } from './preview-produto/preview-produto.component';
import { HomeComponent } from './home/home.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductComponent } from './product/product.component';
import { ImgComponent } from './img/img.component';
import { ProductListAdmComponent } from './product-list-adm/product-list-adm.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { ListCartsComponent } from './list-carts/list-carts.component';
import { TeamComponent } from './team/team.component';
import { OrderComponent } from './order/order.component';
import { ListOrdersComponent } from './list-orders/list-orders.component';
import { AboutComponent } from './about/about.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { AdminComponent } from './admin/admin.component';
import { UsersListAdminComponent } from './users-list-admin/users-list-admin.component';
import { NewProductComponent } from './new-product/new-product.component';
import { AlertComponent } from './alert/alert.component';
import { ListNewProductComponent } from './list-new-product/list-new-product.component';
import { NewProductFormComponent } from './new-product-form/new-product-form.component';
import { StackComponent } from './stack/stack.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    PreviewProdutoComponent,
    HomeComponent,
    AllProductsComponent,
    ProductComponent,
    ImgComponent,
    ProductListAdmComponent,
    CartComponent,
    CartItemComponent,
    ListCartsComponent,
    TeamComponent,
    OrderComponent,
    ListOrdersComponent,
    AboutComponent,
    OrderItemComponent,
    AdminComponent,
    UsersListAdminComponent,
    NewProductComponent,
    AlertComponent,
    ListNewProductComponent,
    NewProductFormComponent,
    NewProductComponent,
    StackComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
