import { ListCartsComponent } from './list-carts/list-carts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { LoginComponent } from './login/login.component';
import { PreviewProdutoComponent } from './preview-produto/preview-produto.component';
import { SignupComponent } from './signup/signup.component';
import { TeamComponent } from './team/team.component';
import { ListOrdersComponent } from './list-orders/list-orders.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { ListNewProductComponent } from './list-new-product/list-new-product.component';
import { NewProductFormComponent } from './new-product-form/new-product-form.component';
import { StackComponent } from './stack/stack.component';
import { AccountComponent } from './account/account.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'entrar', component: LoginComponent},
  { path: 'cadastrar', component: SignupComponent },
  { path: 'stack', component: StackComponent },
  { path: 'conta', component: AccountComponent },
  { path: 'previewProduto', component: PreviewProdutoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'produtos', component: AllProductsComponent },
  { path: 'carrinho', component: ListCartsComponent },
  { path: 'equipe', component: TeamComponent },
  { path: 'pedido', component: ListOrdersComponent },
  { path: 'sobre', component: AboutComponent },
  { path: 'home', component: HomeComponent},
  { path: 'produtos', component: AllProductsComponent},
  { path: 'admin', component: AdminComponent, children: [
    { path: 'produto', component: ListNewProductComponent},
    { path: 'produto/cadastrar', component: NewProductFormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
