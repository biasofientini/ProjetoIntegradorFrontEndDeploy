import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PreviewProdutoComponent } from './preview-produto/preview-produto.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  { path: '', redirectTo: 'previewProduto', pathMatch: 'full' },


  { path: 'entrar', component: LoginComponent},
  { path: 'cadastrar', component: SignupComponent },
  { path: 'previewProduto', component: PreviewProdutoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
