import { AdminListOrdersComponent } from './admin-list-orders/admin-list-orders.component';
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
import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import { StackComponent } from './stack/stack.component';
import { AccountComponent } from './account/account.component';
import { ListNewUserComponent } from './list-new-user/list-new-user.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { AlimentosComponent } from './category/alimentos/alimentos.component';
import { BemestarComponent } from './category/bemestar/bemestar.component';
import { VestuarioComponent } from './category/vestuario/vestuario.component';
import { AcessoriosComponent } from './category/acessorios/acessorios.component';
import { UtensiliosComponent } from './category/utensilios/utensilios.component';
import { SearchComponent } from './search/search.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'entrar', component: LoginComponent},
  { path: 'cadastrar', component: SignupComponent },
  { path: 'stack', component: StackComponent },
  { path: 'conta', component: AccountComponent },
  { path: 'previewProduto', component: PreviewProdutoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'carrinho', component: ListCartsComponent },
  { path: 'equipe', component: TeamComponent },
  { path: 'pedido', component: ListOrdersComponent },
  { path: 'sobre', component: AboutComponent },
  { path: 'home', component: HomeComponent},
  { path: 'produtos', component: AllProductsComponent},
  { path: 'search', component: SearchComponent},
  { path: 'proibido', component: ForbiddenComponent },
  { path: 'admin', component: AdminComponent, children: [
    { path: 'produto', component: ListNewProductComponent},
    { path: 'produto/cadastrar', component: NewProductFormComponent},
    { path: 'pedidos', component: AdminListOrdersComponent },
    { path: 'usuario/cadastrar', component: NewUserFormComponent},
    { path: 'usuario', component: ListNewUserComponent}
  ]},
  { path: 'produtos/alimentos', component: AlimentosComponent, children: [
    { path: 'categoria/:id', component: ProductsCategoryComponent}
  ]},
  { path: 'produtos/bemestar', component: BemestarComponent, children: [
    { path: 'categoria/:id', component: ProductsCategoryComponent}
  ]},
  { path: 'produtos/vestuario', component: VestuarioComponent, children: [
    { path: 'categoria/:id', component: ProductsCategoryComponent}
  ]},
  { path: 'produtos/acessorios', component: AcessoriosComponent, children: [
    { path: 'categoria/:id', component: ProductsCategoryComponent}
  ]},
  { path: 'produtos/utensilios', component: UtensiliosComponent, children: [
    { path: 'categoria/:id', component: ProductsCategoryComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
