import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PreviewProdutoComponent } from './preview-produto/preview-produto.component';
import { SignupComponent } from './signup/signup.component';
import { ProductListAdmComponent } from './product-list-adm/product-list-adm.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'entrar', component: LoginComponent},
  { path: 'cadastrar', component: SignupComponent },
  { path: 'previewProduto', component: PreviewProdutoComponent },
  { path: 'home', component: HomeComponent},
  { path: 'produtos', component: AllProductsComponent},
  { path: 'produtoslistadm', component: ProductListAdmComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
